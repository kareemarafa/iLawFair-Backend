import {
  BadRequestException,
  forwardRef,
  HttpStatus,
  Inject,
  Injectable, NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import {StorefrontUsersService} from '../storefront-users/storefront-users.service'
import {TokenPayloadInterface} from './interfaces'
import {JwtService} from '@nestjs/jwt'
import {StorefrontUser} from '../storefront-users/storefront-users.entity'
import {EncryptionService} from '@ionhour/encryption'
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom, Observable} from "rxjs";
import {StorefrontRegisterUserDto, StorefrontResetPasswordDto} from "./dto";
import {TokenPayload} from "@ionhour/interfaces";


@Injectable()
export class StorefrontAuthService {

  constructor(
    @Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy,
    @Inject(forwardRef(() => StorefrontUsersService))
    private usersService: StorefrontUsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService,
  ) {
  }

  async validateUser(email: string, _password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user?.id) {
      throw new NotFoundException('User is not found')
    }

    const isCorrectPassword = await this.encryptionService.compare(_password, user?.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException('Password is incorrect')
    }
    // TODO user email should be updated in admin database
    // const isActiveTenant = await lastValueFrom(this.adminService.send({cmd: 'CUSTOMER_ACTIVENESS'}, {email}))
    // if (!isActiveTenant) {
    //   throw new UnauthorizedException('Customer is not active')
    // }

    const {password, ...result} = user
    return result
  }

  async login(user: StorefrontUser): Promise<any> {
    let payload: TokenPayloadInterface
    try {
      payload = {email: user.email, sub: user.id}
    } catch (e) {
      throw new BadRequestException(e)
    }
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }

  async register(user: StorefrontRegisterUserDto): Promise<StorefrontUser | Error> {
    console.log({user});
    const findOneOptions = {
      where: [{email: user.email}, {phone: user.phone}]
    };
    let existUser: StorefrontUser;
    const _userExistsObservable: Observable<StorefrontUser> = this.adminService.send({cmd: 'CUSTOMER_FIND_ONE'}, findOneOptions);
    existUser = await lastValueFrom<StorefrontUser>(_userExistsObservable);
    if (existUser?.id) {
      return this.handleBadRequest("User already exists");
    }
    user.password = await this.encryptionService.hash(user.password)
    await this.usersService.createUser(user)
    return lastValueFrom<StorefrontUser>(this.adminService.send({cmd: 'CUSTOMER_REGISTER'}, user));
  }

  handleBadRequest(message: string): Error {
    throw new BadRequestException({
      message,
      statusCode: HttpStatus.BAD_REQUEST
    })
  }

  async getEmailFromToken(token: string): Promise<string> {
    const tokenPayload: TokenPayload = await this.retrieveTokenPayload(token);
    return tokenPayload.email;
  }

  /**
   * Reset Password using token and new password
   * @param token
   * @param  resetPasswordDto
   */
  async resetPassword(token: string, resetPasswordDto: StorefrontResetPasswordDto): Promise<StorefrontUser> {
    const tokenPayload: TokenPayload = await this.retrieveTokenPayload(token);
    const currentUser = await this.usersService.findOneByEmail(tokenPayload.email);
    const isPasswordCorrect = await this.encryptionService.compare(resetPasswordDto?.currentPassword, currentUser.password)
    if (isPasswordCorrect) {
      const hashedPassword = await this.encryptionService.hash(resetPasswordDto.newPassword);
      return this.usersService.updateOne(currentUser.id, {...currentUser, password: hashedPassword});
    } else {
      throw new UnauthorizedException('Password is incorrect')
    }
  }

  async retrieveTokenPayload(token): Promise<TokenPayload> {
    return this.jwtService.verify(token);
  }
}

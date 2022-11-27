import {
  BadRequestException,
  forwardRef,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import {TenantUsersService} from '../tenant-users/tenant-users.service'
import {TokenPayloadInterface} from './interfaces'
import {JwtService} from '@nestjs/jwt'
import {TenantUser} from '../tenant-users/tenant-users.entity'
import {EncryptionService} from '@ionhour/encryption'
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom, Observable, of} from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    @Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy,
    @Inject(forwardRef(() => TenantUsersService))
    private usersService: TenantUsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService,
  ) {
  }

  async validateUser(email: string, _password: string): Promise<any> {
    let user: TenantUser;
    let isPasswordCorrect: boolean;
    const findOneOptions = {
      where: [{email}]
    };
    try {
      user = await lastValueFrom(this.adminService.send({cmd: 'CUSTOMER_LOGIN'}, findOneOptions))
    } catch (e) {
      throw new UnauthorizedException()
    }
    try {
      isPasswordCorrect = await this.encryptionService.compare(_password, user?.password)
    } catch (e) {
      throw new UnauthorizedException('Password is incorrect')
    }
    if (user && isPasswordCorrect) {
      const {password, ...result} = user
      return result
    } else {
      throw new UnauthorizedException()
    }
  }

  async login(user: TenantUser): Promise<any> {
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

  async register(user: TenantUser): Promise<TenantUser | Error> {
    const findOneOptions = {
      where: [{email: user.email}, {phone: user.phone}]
    };
    let existUser: TenantUser;
    const _userExistsObservable: Observable<TenantUser> = this.adminService.send({cmd: 'CUSTOMER_FIND_ONE'}, findOneOptions);
    existUser = await lastValueFrom<TenantUser>(_userExistsObservable);
    if (existUser?.id) {
      return this.handleBadRequest("User already exists");
    }
    user.password = await this.encryptionService.hash(user.password)
    return lastValueFrom<TenantUser>(this.adminService.send({cmd: 'CUSTOMER_REGISTER'}, user));
  }

  handleBadRequest(message: string): Error {
    throw new BadRequestException({
      message,
      statusCode: HttpStatus.BAD_REQUEST
    })
  }

  async checkAuth(token: string): Promise<TokenPayloadInterface> {
    let verifyObject: TokenPayloadInterface
    try {
      verifyObject = await this.jwtService.verify(token)
    } catch (e) {
      throw new UnauthorizedException()
    }
    return verifyObject
  }
}

import { BadRequestException, forwardRef, HttpStatus, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { TokenPayloadInterface } from './interfaces'
import { JwtService } from '@nestjs/jwt'
import { User } from '../users/users.entity'
import { EncryptionService } from '@ionhour/encryption'

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService
  ) {}

  async validateUser(email: string, _password: string): Promise<any> {
    let user: User
    let isPasswordCorrect: boolean
    try {
      user = await this.usersService.findOneOrFailByEmail(email)
    } catch (e) {
      throw new NotFoundException('User not Found')
    }
    try {
      isPasswordCorrect = await this.encryptionService.compare(_password, user?.password)
    } catch (e) {
      throw new BadRequestException('Incorrect Password')
    }
    if (user && isPasswordCorrect) {
      const { password, ...result } = user
      return result
    } else {
      throw new UnauthorizedException()
    }
  }

  async login(user: User): Promise<any> {
    let payload: TokenPayloadInterface
    try {
      payload = { email: user.email, sub: user.id }
    } catch (e) {
      throw new BadRequestException(e)
    }
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }

  async register(user: User): Promise<User> {
    const _user: User = await this.usersService.findOneByEmail(user?.email)
    const _phoneNumber: User = await this.usersService.findOneByPhone(user?.phone)
    if (_user || _phoneNumber) {
      this.handleBadRequest('Email or Phone number is already exists')
    }
    user.password = await this.encryptionService.hash(user.password)
    const createdUser = await this.usersService.createUser(user)
    return createdUser && this.login(user)
  }

  handleBadRequest(message: string): void {
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

import { BadRequestException, forwardRef, HttpStatus, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { TokenPayloadInterface } from './interfaces'
import { JwtService } from '@nestjs/jwt'
import { EncryptionService } from '@ionhour/encryption'
import {AdminUsersService} from "../admin-users/admin-users.service";
import {AdminUser} from "../admin-users/admin-users.entity";

@Injectable()
export class AdminAuthService {
  constructor(
    @Inject(forwardRef(() => AdminUsersService))
    private adminUsersService: AdminUsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService
  ) {}

  async validateUser(email: string, _password: string): Promise<any> {
    let adminUser: AdminUser
    let isPasswordCorrect: boolean
    try {
      adminUser = await this.adminUsersService.findOneOrFailByEmail(email)
    } catch (e) {
      throw new NotFoundException('User not Found')
    }
    try {
      isPasswordCorrect = await this.encryptionService.compare(_password, adminUser?.password)
    } catch (e) {
      throw new BadRequestException('Incorrect Password')
    }
    if (adminUser && isPasswordCorrect) {
      const { password, ...result } = adminUser
      return result
    } else {
      throw new UnauthorizedException()
    }
  }

  async login(adminUser: AdminUser): Promise<any> {
    let payload: TokenPayloadInterface
    try {
      payload = { email: adminUser.email, sub: adminUser.id }
    } catch (e) {
      throw new BadRequestException(e)
    }
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }

  async register(adminUser: AdminUser): Promise<AdminUser> {
    const _user: AdminUser = await this.adminUsersService.findOneByEmail(adminUser?.email)
    const _phoneNumber: AdminUser = await this.adminUsersService.findOneByPhone(adminUser?.phone)
    if (_user || _phoneNumber) {
      this.handleBadRequest('Email or Phone number is already exists')
    }
    adminUser.password = await this.encryptionService.hash(adminUser.password)
    const createdUser = await this.adminUsersService.createUser(adminUser)
    return createdUser && this.login(adminUser)
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

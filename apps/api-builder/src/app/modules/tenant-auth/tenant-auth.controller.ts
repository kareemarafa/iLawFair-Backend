import { Controller, Post, Request, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './tenant-auth.service'
import { TenantUser } from '../tenant-users/tenant-users.entity'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import {RegisterUserDto} from "./dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * the login
   * @param req
   */
  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req): Promise<TenantUser> {
    return this.authService.login(req.user)
  }

  /**
   * the login
   * @param userData
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() userData: RegisterUserDto): Promise<TenantUser> {
    return this.authService.register(userData)
  }
}

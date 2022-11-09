import { Controller, Post, Request, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common'
import { AdminAuthService } from './admin-auth.service'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import {RegisterAdminUserDto} from "./dto";
import {AdminUser} from "../admin_users/admin-users.entity";

@ApiTags('Auth')
@Controller('auth')
export class AdminAuthController {
  constructor(private authService: AdminAuthService) {}

  /**
   * the login
   * @param req
   */
  @Post('login')
  // @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req): Promise<AdminUser> {
    return this.authService.login(req.user)
  }

  /**
   * the login
   * @param adminUserData
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() adminUserData: RegisterAdminUserDto): Promise<AdminUser> {
    return this.authService.register(adminUserData)
  }
}

import {Controller, Post, Request, HttpCode, HttpStatus, Body, UseGuards, Inject} from '@nestjs/common'
import {AuthService} from './tenant-auth.service'
import {TenantUser} from '../tenant-users/tenant-users.entity'
import {ApiTags} from '@nestjs/swagger'
import {AuthGuard} from '@nestjs/passport'
import {RegisterUserDto} from "./dto";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";
import {LocalAuthGuard} from "./guards";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy, private authService: AuthService) {
  }

  /**
   * the login
   * @param req
   */
  @Post('login')
  @UseGuards(LocalAuthGuard)
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
    return lastValueFrom(this.adminService.send({cmd: 'CUSTOMER_REGISTER'}, userData))
  }
}

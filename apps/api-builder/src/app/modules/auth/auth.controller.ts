import { Controller, Post, Request, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from '../users/users.entity'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * the login
   * @param req
   * @param body
   */
  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req, @Body() body): Promise<User> {
    return this.authService.login(req.user)
  }

  /**
   * the login
   * @param userData
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() userData: User): Promise<User> {
    return this.authService.register(userData)
  }
}

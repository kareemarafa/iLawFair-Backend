import { Controller, Post, Request, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from '../users/users.entity'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * the login
   * @param req
   * @param body
   */
  @Post('login')
  @ApiTags('login')
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
  @ApiTags('Register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() userData: User): Promise<User> {
    return this.authService.register(userData)
  }
}

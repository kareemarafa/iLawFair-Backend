import {
  Controller,
  Post,
  Request,
  HttpCode,
  HttpStatus,
  Body,
  UseGuards,
  Headers,
  UseInterceptors, ClassSerializerInterceptor
} from '@nestjs/common'
import {AuthService} from './tenant-auth.service'
import {TenantUser} from '../tenant-users/tenant-users.entity'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {TenantResetPasswordDto, RegisterUserDto} from "./dto";
import {LocalAuthGuard} from "./guards";
import {ExtractTokenUtils} from "@ionhour/backend-core";

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {
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
   * @param registerUserDto
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() registerUserDto: RegisterUserDto): Promise<TenantUser | Error> {
    return this.authService.register(registerUserDto);
  }

  /**
   * Reset the user password
   * @param authorization
   * @param {object} resetPasswordData

   */
  @Post('reset-password')
  @ApiOperation({
    summary: 'Log in',
    description: 'User login; returns a JWT token on success',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: TenantUser,
    description: 'Success!',
  })
  async resetPassword(
    @Headers('Authorization') authorization: string,
    @Body() resetPasswordData: TenantResetPasswordDto): Promise<TenantUser> {
    const token = ExtractTokenUtils(authorization);
    return await this.authService.resetPassword(token, resetPasswordData);
  }
}


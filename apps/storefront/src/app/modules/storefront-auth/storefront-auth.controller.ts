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
import {StorefrontAuthService} from './storefront-auth.service'
import {StorefrontUser} from '../storefront-users/storefront-users.entity'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {StorefrontResetPasswordDto, StorefrontRegisterUserDto} from "./dto";
import {StorefrontLocalAuthGuard} from "./guards";
import {ExtractTokenUtils} from "@ionhour/backend-core";

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class StorefrontAuthController {
  constructor(private authService: StorefrontAuthService) {
  }

  /**
   * the login
   * @param req
   */
  @Post('login')
  @UseGuards(StorefrontLocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req): Promise<StorefrontUser> {
    return this.authService.login(req.user)
  }

  /**
   * the login
   * @param registerUserDto
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() registerUserDto: StorefrontRegisterUserDto): Promise<StorefrontUser | Error> {
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
    type: StorefrontUser,
    description: 'Success!',
  })
  async resetPassword(
    @Headers('Authorization') authorization: string,
    @Body() resetPasswordData: StorefrontResetPasswordDto): Promise<StorefrontUser> {
    const token = ExtractTokenUtils(authorization);
    return await this.authService.resetPassword(token, resetPasswordData);
  }
}


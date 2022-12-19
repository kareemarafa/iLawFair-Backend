import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from "./guards";
import { ForgetPasswordDto } from "./dto";
import {AdminUser} from "../admin-users/admin-users.entity";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  /**
   * the login
   * @param req
   * @param body
   */
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req, @Body() body): Promise<AdminUser> {
    return this.authService.login(req.user);
  }

  /**
   * to get the forgot Password
   * @param forgotPasswordDto
   */
  @Post('forgot/password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() forgotPasswordDto: ForgetPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }
}

import {
  Body,
  Controller,
  Get,
  UseGuards,
  Headers,
  ClassSerializerInterceptor,
  UseInterceptors, Put, NotFoundException
} from '@nestjs/common'
import {StorefrontAuthService} from '../storefront-auth/storefront-auth.service'
import {AuthGuard} from '@nestjs/passport'
import {StorefrontUsersService} from './storefront-users.service'
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {ExtractTokenUtils} from "@ionhour/backend-core";
import {UpdateProfileDto} from "./dto/storefront-update-profile.dto";

@Controller('profile')
@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class StorefrontProfileController<TenantUser> {
  constructor(private authService: StorefrontAuthService, private userService: StorefrontUsersService) {
  }

  @Get()
  async getProfile(@Headers('Authorization') authorization: string) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    if (user?.id) {
      delete user.password;
    } else {
      throw new NotFoundException('User not found')
    }
    return user;
  }

  @Put()
  async updateProfile(@Headers('Authorization') authorization: string, @Body() updateUserProfileDto: UpdateProfileDto) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    if (user?.id) {
      delete user.password;
    } else {
      throw new NotFoundException('User not found')
    }
    return this.userService.updateOne(user.id, {...user, ...updateUserProfileDto})
  }
}

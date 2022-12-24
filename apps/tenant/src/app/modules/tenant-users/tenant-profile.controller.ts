import {
  Body,
  Controller,
  Get,
  UseGuards,
  Headers,
  ClassSerializerInterceptor,
  UseInterceptors, Put
} from '@nestjs/common'
import {AuthService} from '../tenant-auth/tenant-auth.service'
import {AuthGuard} from '@nestjs/passport'
import {TenantUsersService} from './tenant-users.service'
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {ExtractTokenUtils} from "@ionhour/backend-core";
import {UpdateProfileDto} from "./dto/tenant-update-profile.dto";

@Controller('profile')
@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class ProfileController<TenantUser>{
  constructor(private authService: AuthService, private userService: TenantUsersService) {
  }

  @Get()
  async getProfile(@Headers('Authorization') authorization: string) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    const {password,..._profile} = user;
    return _profile
  }

  @Put()
  async updateProfile(@Headers('Authorization') authorization: string, @Body() updateUserProfileDto: UpdateProfileDto) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    const {password,..._user} = user;
    return this.userService.updateOne(user.id, {..._user, ...updateUserProfileDto})
  }
}

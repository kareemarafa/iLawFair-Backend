import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
  ClassSerializerInterceptor,
  UseInterceptors
} from '@nestjs/common'
import {AuthService} from '../tenant-auth/tenant-auth.service'
import {AuthGuard} from '@nestjs/passport'
import {TenantUsersService} from './tenant-users.service'
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {ExtractTokenUtils, KamController} from "@ionhour/backend-core";
import {TenantUser} from "./tenant-users.entity";
import {UpdateProfileDto} from "./dto/tenant-update-profile.dto";

@Controller('profile')
@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class ProfileController  extends KamController<TenantUser>{
  constructor(private authService: AuthService, private userService: TenantUsersService) {
    super(userService)
  }

  @Get()
  async getProfile(@Headers('Authorization') authorization: string) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    const {password,..._profile} = user;
    return _profile
  }

  @Post()
  async updateProfile(@Headers('Authorization') authorization: string, @Body() updateUserProfileDto: UpdateProfileDto) {
    const token = ExtractTokenUtils(authorization);
    const userEmail = await this.authService.getEmailFromToken(token);
    const user = await this.userService.findOneByEmail(userEmail);
    const {password,..._user} = user;
    return this.userService.updateOne(user.id, {..._user, ...updateUserProfileDto})
  }
}

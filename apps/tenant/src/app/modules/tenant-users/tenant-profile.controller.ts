import {Body, Controller, Get, Post, UseGuards, Headers} from '@nestjs/common'
import {AuthService} from '../tenant-auth/tenant-auth.service'
import {AuthGuard} from '@nestjs/passport'
import {TenantUsersService} from './tenant-users.service'
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {KamController} from "@ionhour/backend-core";
import {TenantUser} from "./tenant-users.entity";
import {UpdateProfileDto} from "./dto/tenant-update-profile.dto";

@Controller('profile')
@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProfileController  extends KamController<TenantUser>{
  constructor(private authService: AuthService, private userService: TenantUsersService) {
    super(userService)
  }

  @Get()
  async getProfile(@Headers() headers: Record<string, string>) {
    const token = headers['authorization'].split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    const {password,..._profile} = profile
    return _profile
  }

  @Post()
  async updateProfile(@Headers() headers: Record<string, string>, @Body() body: UpdateProfileDto) {
    const token = headers['authorization'].split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    const {password, ..._profile} = profile
    return this.userService.repo.update(profile.id, {..._profile, ...body})
  }
}

import {Body, Controller, Get, Post, UseGuards, Headers} from '@nestjs/common'
import {AuthService} from '../auth/auth.service'
import {AuthGuard} from '@nestjs/passport'
import {UsersService} from './users.service'
import {UpdateProfileDto} from './dto/update-profile.dto'
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@Controller('profile')
@ApiTags('Profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProfileController {
  constructor(private authService: AuthService, private userService: UsersService) {
  }

  @Get()
  async getProfile(@Headers() headers: Record<string, string>) {
    const token = headers['authorization'].split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    const {password, ..._profile} = profile
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

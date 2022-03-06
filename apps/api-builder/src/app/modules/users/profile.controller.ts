import { Body, Controller, Get, Headers, Post, UseGuards } from '@nestjs/common'
import { AuthService } from '../auth/auth.service'
import { AuthGuard } from '@nestjs/passport'
import { UsersService } from './users.service'
import { UpdateProfileDto } from './dto/update-profile.dto'

@Controller('profile')
@UseGuards(AuthGuard('jwt'))
export class ProfileController {
  constructor(private authService: AuthService, private userService: UsersService) {}
  @Get()
  async getProfile(@Headers('Authorization') authToken: string) {
    const token = authToken.split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    console.log(profile)
    const { password, ..._profile } = profile
    return _profile
  }

  @Post()
  async updateProfile(@Headers('Authorization') authToken: string, @Body() body: UpdateProfileDto) {
    const token = authToken.split(' ')[1]
    const user = await this.authService.checkAuth(token)
    const profile = await this.userService.findOneByEmail(user.email)
    const { password, ..._profile } = profile
    return this.userService.repo.update(profile.id, { ..._profile, ...body })
  }
}

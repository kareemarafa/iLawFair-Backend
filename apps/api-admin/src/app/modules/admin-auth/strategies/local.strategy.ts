import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AdminAuthService } from '../admin-auth.service'
import {AdminUser} from "../../admin-users/admin-users.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AdminAuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<AdminUser | UnauthorizedException> {
    const adminUser = await this.authService.validateUser(email, password)
    if (!adminUser) {
      return new UnauthorizedException()
    }
    return adminUser
  }
}

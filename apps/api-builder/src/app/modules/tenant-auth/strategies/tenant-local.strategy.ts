import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../tenant-auth.service'
import {TenantUser} from "../../tenant-users/tenant-users.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<TenantUser | UnauthorizedException> {
    const user = await this.authService.validateUser(email, password)
    if (!user) {
      return new UnauthorizedException()
    }
    return user
  }
}

import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { StorefrontAuthService } from '../storefront-auth.service'
import {StorefrontUser} from "../../storefront-users/storefront-users.entity";

@Injectable()
export class StorefrontLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: StorefrontAuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<StorefrontUser | UnauthorizedException> {
    const user = await this.authService.validateUser(email, password)
    if (!user) {
      return new UnauthorizedException()
    }
    delete user.password;
    return user;
  }
}

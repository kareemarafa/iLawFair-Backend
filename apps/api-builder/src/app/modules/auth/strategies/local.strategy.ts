import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../auth.service'
import {User} from "../../users/users.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<User | UnauthorizedException> {
    const user = await this.authService.validateUser(email, password)
    if (!user) {
      return new UnauthorizedException()
    }
    return user
  }
}

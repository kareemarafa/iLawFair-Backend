import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { TokenPayloadInterface } from '../interfaces'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TenantJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtSecret')
    })
  }

  async validate(payload: TokenPayloadInterface) {
    return { adminUserId: payload.sub, email: payload.email }
  }
}

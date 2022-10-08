import {forwardRef, Module} from '@nestjs/common'
import {AuthService} from './auth.service'
import {UsersModule} from '../users/users.module'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy, JwtStrategy} from './strategies'
import {JwtModule} from '@nestjs/jwt'
import {AuthController} from './auth.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {EncryptionModule} from '@ionhour/encryption'

@Module({
  imports: [
    EncryptionModule,
    forwardRef(() => UsersModule),
    PassportModule.register({defaultStrategy: 'local'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwtSecret'),
        signOptions: {
          expiresIn: configService.get<string>('jwtExpiresIn')
        }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {
}

import {forwardRef, Module} from '@nestjs/common'
import {AuthService} from './tenant-auth.service'
import {TenantUsersModule} from '../tenant-users/tenant-users.module'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy, JwtStrategy} from './strategies'
import {JwtModule} from '@nestjs/jwt'
import {AuthController} from './tenant-auth.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {EncryptionModule} from '@ionhour/encryption'

@Module({
  imports: [
    EncryptionModule,
    forwardRef(() => TenantUsersModule),
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
export class TenantAuthModule {
}

import {forwardRef, Module} from '@nestjs/common'
import {AdminAuthService} from './admin-auth.service'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy, JwtStrategy} from './strategies'
import {JwtModule} from '@nestjs/jwt'
import {AdminAuthController} from './admin-auth.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {EncryptionModule} from '@ionhour/encryption'
import {AdminUsersModule} from "../admin_users/admin-users.module";

@Module({
  imports: [
    EncryptionModule,
    forwardRef(() => AdminUsersModule),
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
  providers: [AdminAuthService, LocalStrategy, JwtStrategy],
  controllers: [AdminAuthController],
  exports: [AdminAuthService]
})
export class AdminAuthModule {
}

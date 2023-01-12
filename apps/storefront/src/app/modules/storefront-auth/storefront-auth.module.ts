import {forwardRef, Module} from '@nestjs/common'
import {StorefrontAuthService} from './storefront-auth.service'
import {StorefrontUsersModule} from '../storefront-users/storefront-users.module'
import {PassportModule} from '@nestjs/passport'
import {StorefrontLocalStrategy, StorefrontJwtStrategy} from './strategies'
import {JwtModule} from '@nestjs/jwt'
import {StorefrontAuthController} from './storefront-auth.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {EncryptionModule} from '@ionhour/encryption'
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    EncryptionModule,
    forwardRef(() => StorefrontUsersModule),
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
    }),
    ClientsModule.registerAsync([
        {
          name: "ADMIN_SERVICE",
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            transport: Transport.TCP,
            options: {
              port: configService.get<number>('adminMSPort'),
            },
          }),
          inject: [ConfigService],
        },
      ]
    ),
  ],
  providers: [StorefrontAuthService, StorefrontLocalStrategy, StorefrontJwtStrategy],
  controllers: [StorefrontAuthController],
  exports: [StorefrontAuthService]
})
export class StorefrontAuthModule {
}

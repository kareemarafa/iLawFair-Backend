import {forwardRef, Module} from '@nestjs/common'
import {AuthService} from './tenant-auth.service'
import {TenantUsersModule} from '../tenant-users/tenant-users.module'
import {PassportModule} from '@nestjs/passport'
import {TenantLocalStrategy, TenantJwtStrategy} from './strategies'
import {JwtModule} from '@nestjs/jwt'
import {AuthController} from './tenant-auth.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {EncryptionModule} from '@ionhour/encryption'
import {ClientsModule, Transport} from "@nestjs/microservices";

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
  providers: [AuthService, TenantLocalStrategy, TenantJwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class TenantAuthModule {
}
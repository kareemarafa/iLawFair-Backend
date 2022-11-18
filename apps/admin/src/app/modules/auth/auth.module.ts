import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy, LocalStrategy } from "./strategies";
import {EncryptionModule} from "@ionhour/encryption";
import {AdminUsersModule} from "../admin-users/admin-users.module";
import {ConfigModule, ConfigService} from "@nestjs/config";

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
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {
}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DatabaseConnectModule } from '@ionhour/database-connect'
import {authConfig, databaseConfig} from '../environments/environment'
import { features } from './modules'
import {BackendCoreModule} from "@ionhour/backend-core";

@Module({
  imports: [
    BackendCoreModule,
    ConfigModule.forRoot({
      load: [databaseConfig, authConfig],
      isGlobal: true
    }),
    DatabaseConnectModule,
    ...features
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  static port: number
  static adminMSPort: number
  constructor(private readonly configService: ConfigService) {
    AppModule.port = configService.get<number>('port')
    AppModule.adminMSPort = configService.get<number>('adminMSPort')
  }
}

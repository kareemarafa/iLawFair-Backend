import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseConnectModule } from '@ionhour/database-connect'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { authConfig, databaseConfig } from '../environments/environment'
import { features } from './modules'

@Module({
  imports: [
    DatabaseConnectModule,
    ConfigModule.forRoot({
      load: [databaseConfig, authConfig],
      isGlobal: true
    }),
    ...features
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  static port: number
  constructor(private readonly configService: ConfigService) {
    AppModule.port = configService.get<number>('port')
  }
}

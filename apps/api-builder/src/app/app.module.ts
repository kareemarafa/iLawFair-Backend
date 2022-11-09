import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {DatabaseConnectModule} from '@ionhour/database-connect'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {authConfig, databaseConfig} from '../environments/environment'
import {features} from './modules'
import {validate} from './config';
import {CategoriesController, TemplatesController} from "./controllers";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        'local.env',
        'dev.env',
        'test.env',
        'production.env',
      ],
      load: [databaseConfig, authConfig],
      isGlobal: true,
      validate
    }),
    DatabaseConnectModule,
    ...features
  ],
  controllers: [AppController, TemplatesController, CategoriesController],
  providers: [AppService],
  exports: []
})
export class AppModule {
  static port: number

  constructor(private readonly configService: ConfigService) {
    AppModule.port = configService.get<number>('port')
  }
}

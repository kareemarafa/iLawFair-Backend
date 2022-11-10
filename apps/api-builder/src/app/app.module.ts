import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {DatabaseConnectModule} from '@ionhour/database-connect'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {authConfig, databaseConfig} from '../environments/environment'
import {features} from './modules'
import {validate} from './config';
import {CategoriesController, MetaController, TemplatesController} from "./controllers";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {MockCategoriesService} from "./controllers/mock-categories.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MockCategory} from "./controllers/mock-category.entity";


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
    ...features,
    TypeOrmModule.forFeature([MockCategory]),
  ],
  controllers: [AppController, TemplatesController, CategoriesController, MetaController],
  providers: [AppService, MockCategoriesService],
  exports: []
})
export class AppModule {
  static port: number

  constructor(private readonly configService: ConfigService) {
    AppModule.port = configService.get<number>('port')
  }
}

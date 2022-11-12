import {Module} from '@nestjs/common'
import {AppController} from './tenant-app.controller'
import {TenantAppService} from './tenant-app.service'
import {DatabaseConnectModule} from '@ionhour/database-connect'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {authConfig, databaseConfig} from '../environments/environment'
import {features} from './modules'
import {validate} from './config';
import {TenantCategoriesController, TenantMetaController, TenantTemplatesController} from "./controllers";
import {ClientsModule, Transport} from "@nestjs/microservices";


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
  ],
  controllers: [AppController, TenantTemplatesController, TenantCategoriesController, TenantMetaController],
  providers: [TenantAppService],
  exports: []
})
export class TenantAppModule {
  static port: number

  constructor(private readonly configService: ConfigService) {
    TenantAppModule.port = configService.get<number>('port')
  }
}

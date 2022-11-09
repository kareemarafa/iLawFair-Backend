import {Module} from '@nestjs/common'
import {MetaService} from "./meta.service";
import {MetaController} from "./meta.controller";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {ConfigModule, ConfigService} from "@nestjs/config";


@Module({
  imports: [
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
  controllers: [MetaController],
  providers: [MetaService],
  exports: [MetaService]
})
export class MetaModule {
}

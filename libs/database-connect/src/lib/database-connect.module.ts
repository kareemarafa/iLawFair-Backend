import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {ConnectionOptions} from 'typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const configs = {
          type: 'mysql',
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          database: configService.get<string>('database.name'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          synchronize: configService.get<boolean>('database.synchronize'),
          autoLoadEntities: configService.get<boolean>('database.autoLoadEntities'),
          entities: configService.get<any[]>('database.entities'),
          seeds: configService.get<any[]>('database.seeds')
        } as ConnectionOptions;
        console.log(configs)
        return configs;
      }
    })
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class DatabaseConnectModule {
}

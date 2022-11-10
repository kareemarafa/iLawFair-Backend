import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminMeta} from "./meta.entity";
import {MetaService} from "./meta.service";
import {MetaController} from "./meta.controller";

@Module({
  imports: [TypeOrmModule.forFeature([AdminMeta])],
  controllers: [MetaController],
  providers: [MetaService],
  exports: [MetaService]
})
export class MetaModule {}

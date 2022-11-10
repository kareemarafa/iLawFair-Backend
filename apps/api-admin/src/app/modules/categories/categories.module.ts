import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminCategory} from "./categories.entity";
import {CategoriesController} from "./categories.controller";
import {CategoriesService} from "./categories.service";

@Module({
  imports: [TypeOrmModule.forFeature([AdminCategory])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService]
})
export class CategoriesModule {}

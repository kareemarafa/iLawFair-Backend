import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminCategory} from "./admin-categories.entity";
import {AdminCategoriesController} from "./admin-categories.controller";
import {AdminCategoriesService} from "./admin-categories.service";

@Module({
  imports: [TypeOrmModule.forFeature([AdminCategory])],
  controllers: [AdminCategoriesController],
  providers: [AdminCategoriesService],
  exports: [AdminCategoriesService]
})
export class AdminCategoriesModule {}

import {forwardRef, Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminCategory} from "./admin-categories.entity";
import {AdminCategoriesController} from "./admin-categories.controller";
import {AdminCategoriesService} from "./admin-categories.service";
import {AdminMediaModule} from "../admin-media/admin-media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminCategory]),
    forwardRef(() => AdminMediaModule)
  ],
  controllers: [AdminCategoriesController],
  providers: [AdminCategoriesService],
  exports: [AdminCategoriesService]
})
export class AdminCategoriesModule {}

import { Crud, CrudController } from '@nestjsx/crud'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import {Controller, UseGuards} from '@nestjs/common'
import {Category} from "./categories.entity";
import {CategoriesService} from "./categories.service";
import {AuthGuard} from "@nestjs/passport";

@Crud({
  model: {
    type: Category
  }
})
@Controller('categories')
@ApiTags('Categories')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CategoriesController implements CrudController<Category> {
  constructor(public service: CategoriesService) {}
}

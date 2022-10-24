import { Crud, CrudController } from '@nestjsx/crud'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common'
import {Category} from "./categories.entity";
import {CategoriesService} from "./categories.service";

@Crud({
  model: {
    type: Category
  }
})
@ApiBearerAuth()
@Controller('categories')
@ApiTags('categories')
export class CategoriesController implements CrudController<Category> {
  constructor(public service: CategoriesService) {}
}

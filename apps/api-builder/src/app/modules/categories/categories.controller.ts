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
@ApiBearerAuth()
@Controller('categories')
@ApiTags('categories')
@UseGuards(AuthGuard('jwt'))
export class CategoriesController implements CrudController<Category> {
  constructor(public service: CategoriesService) {}
}

import {Crud, CrudController, CrudRequest, GetManyDefaultResponse} from '@nestjsx/crud'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import {Controller, UseGuards} from '@nestjs/common'
import {AdminCategory} from "./categories.entity";
import {CategoriesService} from "./categories.service";
// import {AuthGuard} from "@nestjs/passport";
import {MessagePattern} from "@nestjs/microservices";

@Crud({
  model: {
    type: AdminCategory
  }
})
@Controller('categories')
@ApiTags('Categories')
// @UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CategoriesController implements CrudController<AdminCategory> {
  constructor(public service: CategoriesService) {}

  get base(): CrudController<AdminCategory> {
    return this
  }

  @MessagePattern({cmd: 'GET_ALL_CATEGORIES'})
  getAllCategories({req}: { req: CrudRequest }): Promise<GetManyDefaultResponse<AdminCategory> | AdminCategory[]> {
    return this.base.getManyBase(req);
  }
}

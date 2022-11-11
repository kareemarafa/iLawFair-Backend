import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, Get, Param} from '@nestjs/common'
import {AdminCategory} from "./categories.entity";
import {CategoriesService} from "./categories.service";
// import {AuthGuard} from "@nestjs/passport";
import {MessagePattern} from "@nestjs/microservices";
import {KamController} from "@ionhour/backend-core";

@Controller('categories')
@ApiTags('Categories')
// @UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CategoriesController extends KamController<AdminCategory> {
  constructor(public service: CategoriesService) {
    super(service);
  }

  @MessagePattern({cmd: 'GET_ALL_CATEGORIES'})
  getAllCategories({req}: { req: Express.Request }): Promise<AdminCategory[]> {
    return super.getManyBase(req);
  }
}

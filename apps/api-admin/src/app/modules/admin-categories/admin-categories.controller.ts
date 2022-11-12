import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, Get, Param} from '@nestjs/common'
import {AdminCategory} from "./admin-categories.entity";
import {AdminCategoriesService} from "./admin-categories.service";
// import {AuthGuard} from "@nestjs/passport";
import {MessagePattern} from "@nestjs/microservices";
import {KamController} from "@ionhour/backend-core";

@Controller('categories')
@ApiTags('Categories')
// @UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminCategoriesController extends KamController<AdminCategory> {
  constructor(public service: AdminCategoriesService) {
    super(service);
  }

  @MessagePattern({cmd: 'GET_ALL_CATEGORIES'})
  getAllCategories({req}: { req: Express.Request }): Promise<AdminCategory[]> {
    return super.getManyBase(req);
  }
}

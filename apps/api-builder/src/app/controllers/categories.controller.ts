import {Controller, Get, Inject, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";
import {Crud, CrudController, CrudRequest, Override, ParsedRequest} from "@nestjsx/crud";
import {MockCategory} from "./mock-category.entity";
import {MockCategoriesService} from "./mock-categories.service";

@Crud({
  model: {
    type: MockCategory
  }
})
@Controller('categories')
@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class CategoriesController implements CrudController<MockCategory> {

  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy, public service: MockCategoriesService) {}

  @Override()
  getMany(@ParsedRequest() req: CrudRequest) {
    return lastValueFrom(this.adminService.send({cmd: 'GET_ALL_CATEGORIES'}, {req}))
  }

}

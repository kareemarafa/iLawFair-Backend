import {Controller, Get, Inject, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";

@Controller('categories')
@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class CategoriesController  {
  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy) {}

  @Get()
  getMany() {
    return lastValueFrom(this.adminService.send({cmd: 'GET_ALL_CATEGORIES'}, {}))
  }

}

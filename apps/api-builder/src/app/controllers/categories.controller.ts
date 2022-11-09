import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";

@Controller('categories')
@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class CategoriesController {

  @Get()
  findAll() {
    return 'This is a find all API';
  }

}

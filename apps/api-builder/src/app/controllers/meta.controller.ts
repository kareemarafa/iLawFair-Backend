import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";

@Controller('meta')
@ApiTags('Meta')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class MetaController {

  @Get('/key/:key')
  findByKey(@Param('key') key: string) {
    return `This is a find by key = ${key} API`;
  }

}

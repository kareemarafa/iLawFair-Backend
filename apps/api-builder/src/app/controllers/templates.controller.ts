import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";

@Controller('templates')
@ApiTags('Templates')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class TemplatesController {

  @Get()
  findAll() {
    return 'This is a find all API';
  }

}

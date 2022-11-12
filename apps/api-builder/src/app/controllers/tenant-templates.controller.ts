import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";

@Controller('admin-templates')
@ApiTags('Templates')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class TenantTemplatesController {

  @Get()
  findAll() {
    return 'This is a find all API';
  }

}

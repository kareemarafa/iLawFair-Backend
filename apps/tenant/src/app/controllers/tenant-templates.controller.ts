import {Controller, Get, Inject, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";

@Controller('templates')
@ApiTags('Templates')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class TenantTemplatesController {

  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy) {
  }
  @Get()
  findAll() {
    return lastValueFrom(this.adminService.send({cmd: 'GET_ALL_TEMPLATES'}, {}))
  }

}

import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, Get, Inject, Param, UseGuards} from '@nestjs/common'
import {AuthGuard} from "@nestjs/passport";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";

@ApiBearerAuth()
@Controller('meta')
@ApiTags('Meta')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MetaController {
  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy) {
  }

  @Get('/key/:key')
  findByKey(@Param('key') key: string): Promise<any> {
    return lastValueFrom(this.adminService.send({cmd: 'GET_META_BY_KEY'}, {key}))
  }
}

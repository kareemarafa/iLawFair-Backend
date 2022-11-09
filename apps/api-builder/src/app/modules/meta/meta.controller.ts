import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, Get, Param, UseGuards} from '@nestjs/common'
import {MetaService} from "./meta.service";
import {AuthGuard} from "@nestjs/passport";

@ApiBearerAuth()
@Controller('meta')
@ApiTags('Meta')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MetaController  {
  constructor(public service: MetaService) {}

  @Get('/key/:key')
  findByKey(@Param('key') key: string): Promise<any> {
    return this.service.findByKey(key);
  }
}

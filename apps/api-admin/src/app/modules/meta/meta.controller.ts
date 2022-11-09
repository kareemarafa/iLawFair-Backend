import {Crud, CrudController} from '@nestjsx/crud'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, Get, Param, UseGuards} from '@nestjs/common'
import {Meta} from "./meta.entity";
import {MetaService} from "./meta.service";
import {AuthGuard} from "@nestjs/passport";
import {MessagePattern} from '@nestjs/microservices';


@Crud({
  model: {
    type: Meta
  },
})
@ApiBearerAuth()
@Controller('meta')
@ApiTags('Meta')
// @UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MetaController implements CrudController<Meta> {
  constructor(public service: MetaService) {
  }

  @MessagePattern({cmd: 'GET_META_BY_KEY'})
  getOneByKey({key}: { key: string }): Promise<Meta> {
    return this.service.findOne({where: {key}});
  }
}

import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller} from '@nestjs/common'
import {AdminMeta} from "./admin-meta.entity";
import {AdminMetaService} from "./admin-meta.service";
// import {AuthGuard} from "@nestjs/passport";
import {MessagePattern} from '@nestjs/microservices';
import {KamController} from "@ionhour/backend-core";


@Controller('meta')
@ApiTags('Meta')
// @UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminMetaController extends KamController<AdminMeta> {
  constructor(public service: AdminMetaService) {
    super(service)
  }

  @MessagePattern({cmd: 'GET_META_BY_KEY'})
  getOneByKey({key}: { key: string }): Promise<AdminMeta> {
    return this.service.findOneByKey({where: {key}});
  }
}

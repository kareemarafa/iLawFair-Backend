import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Controller, UseGuards} from '@nestjs/common'
import {AdminMeta} from "./admin-meta.entity";
import {AdminMetaService} from "./admin-meta.service";
import {MessagePattern} from '@nestjs/microservices';
import {KamController} from "@ionhour/backend-core";


// @ApiBearerAuth()
@ApiTags('Meta')
@Controller('meta')
// @UseGuards(AuthGuard('jwt'))
export class AdminMetaController extends KamController<AdminMeta> {
  constructor(public service: AdminMetaService) {
    super(service)
  }

  @MessagePattern({cmd: 'GET_META_BY_KEY'})
  getOneByKey({key}: { key: string }): Promise<AdminMeta> {
    return this.service.findOneByKey({where: {key}});
  }
}

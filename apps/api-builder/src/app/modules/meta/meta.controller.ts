import { Crud, CrudController } from '@nestjsx/crud'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common'
import {Meta} from "./meta.entity";
import {MetaService} from "./meta.service";

@Crud({
  model: {
    type: Meta
  }
})
@ApiBearerAuth()
@Controller('meta')
@ApiTags('meta')
export class MetaController implements CrudController<Meta> {
  constructor(public service: MetaService) {}
}

import { Crud, CrudController } from '@nestjsx/crud'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import {Controller, UseGuards} from '@nestjs/common'
import {Meta} from "./meta.entity";
import {MetaService} from "./meta.service";
import {AuthGuard} from "@nestjs/passport";

@Crud({
  model: {
    type: Meta
  }
})
@ApiBearerAuth()
@Controller('meta')
@ApiTags('meta')
@UseGuards(AuthGuard('jwt'))
export class MetaController implements CrudController<Meta> {
  constructor(public service: MetaService) {}
}

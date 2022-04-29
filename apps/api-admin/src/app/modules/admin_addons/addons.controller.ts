import {Crud, CrudController} from "@nestjsx/crud";
import {Controller} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {Addons} from "./addons.entity";
import {AddonsService} from "./addons.service";

@Crud({
  model: {
    type: Addons
  }
})
@Controller('admin_addons')
@ApiTags('Addons')
export class AddonsController implements CrudController<Addons> {
  constructor(public service: AddonsService) {}
}

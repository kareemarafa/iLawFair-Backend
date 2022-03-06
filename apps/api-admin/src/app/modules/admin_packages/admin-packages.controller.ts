import { Crud, CrudController } from '@nestjsx/crud'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Packages } from './admin-packages.entity'
import { AdminPackagesService } from './admin-packages.service'

@Crud({
  model: {
    type: Packages
  }
})
@Controller('packages')
@ApiTags('Packages')
export class AdminPackagesController implements CrudController<Packages> {
  constructor(public service: AdminPackagesService) {}
}

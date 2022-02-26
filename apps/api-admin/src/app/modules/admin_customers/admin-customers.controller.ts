import { Crud, CrudController } from '@nestjsx/crud'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AdminCustomer } from './admin-customers.entity'
import { AdminCustomerService } from './admin-customers.service'

@Crud({
  model: {
    type: AdminCustomer
  }
})
@Controller('admin-customer')
@ApiTags('Admin Customer')
export class AdminCustomerController implements CrudController<AdminCustomer> {
  constructor(public service: AdminCustomerService) {}
}

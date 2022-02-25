import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { adminUser } from './admin-users.entity'
import { AdminUsersService } from './admin-users.service'

@Crud({
  model: {
    type: adminUser
  }
})
@Controller('adminUsers')
@ApiTags('Admin Users')
export class AdminUsersController implements CrudController<adminUser> {
  constructor(public service: AdminUsersService) {}
}

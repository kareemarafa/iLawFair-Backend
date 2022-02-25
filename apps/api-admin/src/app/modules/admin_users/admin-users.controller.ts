import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { AdminUser } from './admin-users.entity'
import { AdminUsersService } from './admin-users.service'

@Crud({
  model: {
    type: AdminUser
  }
})
@Controller('admin-users')
@ApiTags('Admin Users')
export class AdminUsersController implements CrudController<AdminUser> {
  constructor(public service: AdminUsersService) {}
}

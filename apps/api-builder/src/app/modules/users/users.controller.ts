import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { User } from './users.entity'
import { UsersService } from './users.service'

@Crud({
  model: {
    type: User
  },
  query: {
    join: {
      projects: {}
    }
  }
})
@Controller('Users')
@ApiTags('Users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}

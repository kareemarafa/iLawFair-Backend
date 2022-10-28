import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { User } from './users.entity'
import { UsersService } from './users.service'
import {AuthGuard} from "@nestjs/passport";

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
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}

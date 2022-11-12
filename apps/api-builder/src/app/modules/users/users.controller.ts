import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import { User } from './users.entity'
import { UsersService } from './users.service'
import {AuthGuard} from "@nestjs/passport";
import {KamController} from "@ionhour/backend-core";

@Controller('Users')
@ApiTags('Users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UsersController extends KamController<User> {
  constructor(public service: UsersService) {
    super(service)
  }
}

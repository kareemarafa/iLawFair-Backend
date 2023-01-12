import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import { StorefrontUser } from './storefront-users.entity'
import { StorefrontUsersService } from './storefront-users.service'
import {AuthGuard} from "@nestjs/passport";
import {KamController} from "@ionhour/backend-core";

@Controller('Users')
@ApiTags('Users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class StorefrontUsersController extends KamController<StorefrontUser> {
  constructor(public service: StorefrontUsersService) {
    super(service)
  }
}

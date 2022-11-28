import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import { TenantUser } from './tenant-users.entity'
import { TenantUsersService } from './tenant-users.service'
import {AuthGuard} from "@nestjs/passport";
import {KamController} from "@ionhour/backend-core";

@Controller('Users')
@ApiTags('Users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TenantUsersController extends KamController<TenantUser> {
  constructor(public service: TenantUsersService) {
    super(service)
  }
}

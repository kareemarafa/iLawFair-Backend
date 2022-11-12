import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AdminUser } from './admin-users.entity'
import { AdminUsersService } from './admin-users.service'
import {KamController} from "@ionhour/backend-core";

@Controller('admin-tenant-users')
@ApiTags('Admin Users')
export class AdminUsersController extends KamController<AdminUser>{
  constructor(public service: AdminUsersService) {
    super(service);
  }
}

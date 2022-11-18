import {InjectRepository} from '@nestjs/typeorm'
import {Injectable} from '@nestjs/common'
import {AdminUser} from './admin-users.entity'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class AdminUsersService extends KamService<AdminUser> {
  constructor(@InjectRepository(AdminUser) repo) {
    super(repo)
    this.relations = []
    this.selection = {password: false}
  }

}

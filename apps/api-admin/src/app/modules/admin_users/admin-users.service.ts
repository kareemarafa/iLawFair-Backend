import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { AdminUser } from './admin-users.entity'

@Injectable()
export class AdminUsersService extends TypeOrmCrudService<AdminUser> {
  constructor(@InjectRepository(AdminUser) repo) {
    super(repo)
  }
}

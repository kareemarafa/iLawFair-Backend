import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { adminUser } from './admin-users.entity'

@Injectable()
export class AdminUsersService extends TypeOrmCrudService<adminUser> {
  constructor(@InjectRepository(adminUser) repo) {
    super(repo)
  }
}

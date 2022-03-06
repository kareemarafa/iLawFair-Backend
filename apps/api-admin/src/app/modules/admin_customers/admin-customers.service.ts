import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { AdminCustomer } from './admin-customers.entity'

@Injectable()
export class AdminCustomerService extends TypeOrmCrudService<AdminCustomer> {
  constructor(@InjectRepository(AdminCustomer) repo) {
    super(repo)
  }
}

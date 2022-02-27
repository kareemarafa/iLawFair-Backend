import { Subscription } from './subscriptions.entity'
import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SubscriptionsService extends TypeOrmCrudService<Subscription> {
  constructor(@InjectRepository(Subscription) repo) {
    super(repo)
  }
}

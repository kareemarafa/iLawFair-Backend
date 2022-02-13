import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Page } from './pages.entity'

@Injectable()
export class PagesService extends TypeOrmCrudService<Page> {
  constructor(@InjectRepository(Page) repo) {
    super(repo)
  }
}

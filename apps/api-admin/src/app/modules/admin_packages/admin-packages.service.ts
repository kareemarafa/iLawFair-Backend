import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Packages } from './admin-packages.entity'

@Injectable()
export class AdminPackagesService extends TypeOrmCrudService<Packages> {
  constructor(@InjectRepository(Packages) repo) {
    super(repo)
  }
}

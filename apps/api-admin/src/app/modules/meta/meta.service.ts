import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {Meta} from "./meta.entity";

@Injectable()
export class MetaService extends TypeOrmCrudService<Meta> {
  constructor(@InjectRepository(Meta) repo) {
    super(repo)
  }
}

import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminMeta} from "./meta.entity";

@Injectable()
export class MetaService extends TypeOrmCrudService<AdminMeta> {
  constructor(@InjectRepository(AdminMeta) repo) {
    super(repo)
  }
}

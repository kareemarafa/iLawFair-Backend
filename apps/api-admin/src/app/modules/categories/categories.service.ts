import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminCategory} from "./categories.entity";

@Injectable()
export class CategoriesService extends TypeOrmCrudService<AdminCategory> {
  constructor(@InjectRepository(AdminCategory) repo) {
    super(repo)
  }
}

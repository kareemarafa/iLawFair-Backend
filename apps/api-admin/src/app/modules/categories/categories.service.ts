import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import {Category} from "./categories.entity";

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo) {
    super(repo)
  }
}

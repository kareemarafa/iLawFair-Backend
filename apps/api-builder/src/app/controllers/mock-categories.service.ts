import {Injectable} from '@nestjs/common'
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm'
import {MockCategory} from "./mock-category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class MockCategoriesService extends TypeOrmCrudService<MockCategory> {
  constructor(@InjectRepository(MockCategory) repo) {
    super(repo)
  }
}

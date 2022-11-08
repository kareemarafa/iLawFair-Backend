import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CoreMediaService<T> extends TypeOrmCrudService<T> {
  constructor( public repo: Repository<T>) {
    super(repo)
  }

  async saveUploadedFile(dto) {
    return this.repo.save(dto);
  }
}

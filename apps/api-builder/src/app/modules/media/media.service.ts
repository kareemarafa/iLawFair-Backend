import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Media } from './media.entity'
import { Repository } from 'typeorm'

@Injectable()
export class MediaService extends TypeOrmCrudService<Media> {
  constructor(@InjectRepository(Media) public repo: Repository<Media>) {
    super(repo)
  }

  async saveUploadedFile(dto) {
    return this.repo.save(dto);
  }
}

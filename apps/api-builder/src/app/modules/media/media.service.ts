import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Media } from './media.entity'

@Injectable()
export class MediaService extends TypeOrmCrudService<Media> {
  constructor(@InjectRepository(Media) repo) {
    super(repo)
  }
}

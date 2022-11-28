import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import {KamService} from "./kam.service";

@Injectable()
export class KamMediaService<T> extends KamService<T> {
  constructor(repo: Repository<T>) {
    super(repo);
  }

  async saveUploadedFile(dto) {
    return this.repo.save(dto);
  }
}

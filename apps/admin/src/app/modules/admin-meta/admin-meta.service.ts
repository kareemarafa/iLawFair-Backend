import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminMeta} from "./admin-meta.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class AdminMetaService extends KamService<AdminMeta> {
  constructor(@InjectRepository(AdminMeta) repo) {
    super(repo)
    this.uniques = ['key'];
  }

  findOneByKey(options): Promise<AdminMeta> {
    return this.repo.findOne(options);
  }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminMeta} from "./meta.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class MetaService extends KamService<AdminMeta> {
  constructor(@InjectRepository(AdminMeta) repo) {
    super(repo)
  }

  findOneByKey(options): Promise<AdminMeta> {
    return this.repo.findOne(options);
  }
}

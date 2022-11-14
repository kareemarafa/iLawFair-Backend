import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TenantPage } from './tenant-pages.entity'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class TenantPagesService extends KamService<TenantPage> {
  constructor(@InjectRepository(TenantPage) repo) {
    super(repo)
    this.relations = ['project', 'screenshot']
  }
}

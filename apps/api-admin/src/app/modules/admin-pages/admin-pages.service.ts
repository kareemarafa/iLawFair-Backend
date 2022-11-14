import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {KamService} from "@ionhour/backend-core";
import {AdminPage} from "./admin-pages.entity";

@Injectable()
export class AdminPagesService extends KamService<AdminPage> {
  constructor(@InjectRepository(AdminPage) repo) {
    super(repo)
    this.relations = ['template', 'screenshot']
  }
}

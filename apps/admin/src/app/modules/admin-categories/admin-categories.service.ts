import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminCategory} from "./admin-categories.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class AdminCategoriesService extends KamService<AdminCategory> {
  constructor(@InjectRepository(AdminCategory) repo) {
    super(repo)
    this.relations = ['icon']
    this.uniques = ['name']
  }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminCategory} from "./categories.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class CategoriesService extends KamService<AdminCategory> {
  constructor(@InjectRepository(AdminCategory) repo) {
    super(repo)
  }
}

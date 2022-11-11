import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminTemplate} from "./template.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class TemplateService extends KamService<AdminTemplate> {
  constructor(@InjectRepository(AdminTemplate) repo) {
    super(repo)
  }
}

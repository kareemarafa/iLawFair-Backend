import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {AdminTemplate} from "./admin-template.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class AdminTemplateService extends KamService<AdminTemplate> {
  constructor(@InjectRepository(AdminTemplate) repo) {
    super(repo)
    this.relations = ['pages', 'categories', 'logo', 'screenshot']
  }
}

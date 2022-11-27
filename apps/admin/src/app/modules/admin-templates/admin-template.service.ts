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

  async refactorItemBeforeCreate(item): Promise<AdminTemplate> {
    if (item?.categories?.length) {
      item.categories = item.categories.map(category => ({id: category}))
    }
    return item;
  }
}

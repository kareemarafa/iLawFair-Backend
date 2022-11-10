import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {AdminTemplate} from "./template.entity";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";

@Injectable()
export class TemplateService extends TypeOrmCrudService<AdminTemplate> {
  constructor(@InjectRepository(AdminTemplate) repo) {
    super(repo)
  }
}

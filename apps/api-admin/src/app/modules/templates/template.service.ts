import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {Template} from "./template.entity";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";

@Injectable()
export class TemplateService extends TypeOrmCrudService<Template> {
  constructor(@InjectRepository(Template) repo) {
    super(repo)
  }
}

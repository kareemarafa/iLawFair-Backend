import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Page } from './pages.entity'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class PagesService extends KamService<Page> {
  constructor(@InjectRepository(Page) repo) {
    super(repo)
  }
}

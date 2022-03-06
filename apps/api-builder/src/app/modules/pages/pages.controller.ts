import { Crud, CrudController } from '@nestjsx/crud'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Page } from './pages.entity'
import { PagesService } from './pages.service'

@Crud({
  model: {
    type: Page
  },
  query: {
    join: {
      project: {}
    }
  }
})
@Controller('pages')
@ApiTags('Pages')
export class PagesController implements CrudController<Page> {
  constructor(public service: PagesService) {}
}

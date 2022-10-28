import { Crud, CrudController } from '@nestjsx/crud'
import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import { Page } from './pages.entity'
import { PagesService } from './pages.service'
import {AuthGuard} from "@nestjs/passport";

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
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PagesController implements CrudController<Page> {
  constructor(public service: PagesService) {}
}

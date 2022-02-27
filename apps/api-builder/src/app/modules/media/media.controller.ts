import { Crud, CrudController } from '@nestjsx/crud'
import { Media } from './media.entity'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MediaService } from './media.service'

@Crud({
  model: {
    type: Media
  }
})
@Controller('media')
@ApiTags('media')
export class MediaController implements CrudController<Media> {
  constructor(public service: MediaService) {}
}

import {Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud'
import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Page} from './pages.entity'
import {PagesService} from './pages.service'
import {AuthGuard} from "@nestjs/passport";
import {Media} from "../media/media.entity";
import {User} from "../users/users.entity";
import {MediaService} from "../media/media.service";
import {FileUploadingUtils} from "@ionhour/backend-core";

@Crud({
  model: {
    type: Page
  },
  query: {
    join: {
      project: {
        eager: true
      },
      screenshot: {
        eager: true
      }
    }
  },
  routes: {
    createOneBase: {
      interceptors: [FileUploadingUtils.singleFileUploader('screenshot')],
    },
  },
})
@Controller('pages')
@ApiTags('Pages')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PagesController implements CrudController<Page> {
  constructor(public service: PagesService, private mediaService: MediaService) {
  }

  get base(): CrudController<Page> {
    return this
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Page,
    @UploadedFile() uploadedFile: any,
  ) {
    if (uploadedFile) {
      const screenshot = new Media();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = uploadedFile.path;
      screenshot.destination = uploadedFile.destination;
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    return this.base.createOneBase(req, dto);
  }
}

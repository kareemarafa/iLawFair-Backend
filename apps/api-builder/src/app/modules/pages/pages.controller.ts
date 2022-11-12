import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Page} from './pages.entity'
import {PagesService} from './pages.service'
import {AuthGuard} from "@nestjs/passport";
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {MediaService} from "../media/media.service";
import {MediaEntity} from "../media/media.entity";

@Controller('pages')
@ApiTags('Pages')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PagesController extends  KamController<Page> {
  constructor(public service: PagesService, private mediaService: MediaService) {
    super(service)
  }


  // @ApiConsumes('multipart/form-data')
  // async createOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: Page,
  //   @UploadedFile() uploadedFile: any,
  // ) {
  //   if (uploadedFile) {
  //     const screenshot = new MediaEntity();
  //     screenshot.filename = uploadedFile.filename;
  //     screenshot.path = uploadedFile.path;
  //     screenshot.destination = uploadedFile.destination;
  //     screenshot.mimetype = uploadedFile.mimetype;
  //     // await this.mediaService.saveUploadedFile(screenshot);
  //     dto.screenshot = screenshot;
  //   }
  //   return this.base.createOneBase(req, dto);
  // }
}

import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {AuthGuard} from "@nestjs/passport";
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {AdminPage} from "./admin-pages.entity";
import {AdminPagesService} from "./admin-pages.service";
import {AdminMediaService} from "../admin-media/admin-media.service";
import {AdminMedia} from "../admin-media/admin-media.entity";

@Controller('pages')
@ApiTags('Pages')
// @UseGuards(AuthGuard('jwt'))
// @ApiBearerAuth()
export class AdminPagesController extends  KamController<AdminPage> {
  constructor(public service: AdminPagesService, private mediaService: AdminMediaService) {
    super(service)
  }


  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('screenshot'))
  async createOne(
    @Body() dto: AdminPage,
    @UploadedFile() uploadedFile: Express.Multer.File,
  ) {
    if (uploadedFile) {
      const screenshot = new AdminMedia();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = uploadedFile.path;
      screenshot.destination = uploadedFile.destination;
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    return super.createOneBase(dto);
  }
}

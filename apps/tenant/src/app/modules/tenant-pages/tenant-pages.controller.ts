import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {TenantPage} from './tenant-pages.entity'
import {TenantPagesService} from './tenant-pages.service'
import {AuthGuard} from "@nestjs/passport";
import {FileUploadingUtils, KamController, MediaEntityMapperUtils} from "@ionhour/backend-core";
import {MediaService} from "../tenant-media/tenant-media.service";
import {TenantMedia} from "../tenant-media/tenant-media.entity";

@Controller('pages')
@ApiTags('Pages')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PagesController extends  KamController<TenantPage> {
  constructor(public service: TenantPagesService, private mediaService: MediaService) {
    super(service)
  }


  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('screenshot'))
  async createOne(
    @Body() dto: TenantPage,
    @UploadedFile() uploadedFile: Express.Multer.File,
  ) {
    if (uploadedFile) {
      let screenshot = new TenantMedia();
      screenshot = MediaEntityMapperUtils(screenshot, uploadedFile);
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    return super.createOneBase(dto);
  }
}

import {Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {FileUploadingUtils, KamController, MediaEntityMapperUtils} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {MediaService} from "./tenant-media.service";
import {TenantMedia} from "./tenant-media.entity";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MediaController  extends KamController<TenantMedia> {
  constructor(public service: MediaService) {
    super(service);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  async createOne(
    @UploadedFile() uploadedFile: Express.Multer.File
  )
  {
    let media = new TenantMedia();
    media = MediaEntityMapperUtils(media, uploadedFile);
    return super.createOneBase(media);
  }
}

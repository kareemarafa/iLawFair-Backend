import {Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {FileUploadingUtils, KamController} from '@ionhour/backend-core'
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

  @UseGuards(AuthGuard('jwt'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  async createOne(
    @UploadedFile() uploadedFile: Express.Multer.File
  ) {
    const media = new TenantMedia();
    media.filename = uploadedFile.filename;
    media.path = (uploadedFile.path).split(__dirname)[1];
    media.destination = (uploadedFile.destination).split(__dirname)[1];
    media.mimetype = uploadedFile.mimetype;
    return super.createOneBase(media);
  }
}

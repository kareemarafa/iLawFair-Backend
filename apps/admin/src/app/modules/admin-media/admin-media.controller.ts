import {Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {FileUploadingUtils, KamController, MediaEntityMapperUtils} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {AdminMediaService} from "./admin-media.service";
import {AdminMedia} from "./admin-media.entity";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminMediaController extends KamController<AdminMedia> {
  constructor(public service: AdminMediaService) {
    super(service);
  }

  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  @ApiConsumes('multipart/form-data')
  async createOne(@UploadedFile() uploadedFile: Express.Multer.File) {
    let media = new AdminMedia();
    media = MediaEntityMapperUtils(media, uploadedFile);
    return super.createOneBase(media);
  }
}

import {Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {CoreMedia, FileUploadingUtils, KamController} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {AdminMediaService} from "./admin-media.service";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminMediaController extends KamController<CoreMedia> {
  constructor(public service: AdminMediaService) {
    super(service);
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  @ApiConsumes('multipart/form-data')
  async createOne(@UploadedFile() uploadedFile: Express.Multer.File) {
    const media = new CoreMedia();
    media.filename = uploadedFile.filename;
    media.path = (uploadedFile.path).split(__dirname)[1];
    media.destination = (uploadedFile.destination).split(__dirname)[1];
    media.mimetype = uploadedFile.mimetype;
    // media.user = {id: req.parsed.authPersist['user.id']} as User;
    return super.createOneBase(media);
  }
}

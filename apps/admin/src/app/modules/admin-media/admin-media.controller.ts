import {Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {FileUploadingUtils, KamController} from '@ionhour/backend-core'
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

  // @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  @ApiConsumes('multipart/form-data')
  async createOne(@UploadedFile() uploadedFile: Express.Multer.File) {
    const media = new AdminMedia();
    media.filename = uploadedFile.filename;
    media.path = (uploadedFile.path).split(__dirname)[1];
    media.destination = (uploadedFile.destination).split(__dirname)[1];
    media.mimetype = uploadedFile.mimetype;
    // tenant-media.user = {id: req.parsed.authPersist['user.id']} as User;
    return super.createOneBase(media);
  }
}
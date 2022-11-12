import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {FileUploadingUtils, KamController} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {User} from "../users/users.entity";
import {MediaEntity} from "./media.entity";
import {MediaService} from "./media.service";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MediaController  extends KamController<MediaEntity> {
  constructor(public service: MediaService) {
    super(service);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @ApiConsumes('multipart/form-data')
  // async createOne(
  //   @UploadedFile() uploadedFile: Express.Multer.File
  // ) {
  //   const media = new MediaEntity();
  //   media.filename = uploadedFile.filename;
  //   media.path = (uploadedFile.path).split(__dirname)[1];
  //   media.destination = (uploadedFile.destination).split(__dirname)[1];
  //   media.mimetype = uploadedFile.mimetype;
  //   media.user = {id: req.parsed.authPersist['user.id']} as User;
  //   return this.base.createOneBase(req, media);
  // }
}

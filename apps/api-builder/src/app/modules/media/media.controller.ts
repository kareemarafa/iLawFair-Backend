import {Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedRequest} from '@nestjsx/crud'
import {Media} from './media.entity'
import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {MediaService} from './media.service'
import {FileUploadingUtils} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {User} from "../users/users.entity";

@Crud({
  model: {
    type: Media
  },
  query: {
    join: {
      user: {
        eager: true,
        select: false
      },
    }
  },
  routes: {
    createOneBase: {
      interceptors: [FileUploadingUtils.singleFileUploader('file')],
    },
  },
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    'user.id': user['userId'],
  }),
  persist: (user: User) => ({
    'user.id': user['userId'],
  }),
})
@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MediaController implements CrudController<Media> {
  constructor(public service: MediaService) {
  }

  get base(): CrudController<Media> {
    return this
  }

  @Override()
  @UseGuards(AuthGuard('jwt'))
  @ApiConsumes('multipart/form-data')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @UploadedFile() uploadedFile: Express.Multer.File
  ) {
    const media = new Media();
    media.filename = uploadedFile.filename;
    media.path = (uploadedFile.path).split(__dirname)[1];
    media.destination = (uploadedFile.destination).split(__dirname)[1];
    media.mimetype = uploadedFile.mimetype;
    media.user = {id: req.parsed.authPersist['user.id']} as User;
    return this.base.createOneBase(req, media);
  }
}

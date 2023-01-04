import {Controller, Get, Headers, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {ExtractTokenUtils, FileUploadingUtils, KamController, MediaEntityMapperUtils} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {MediaService} from "./tenant-media.service";
import {TenantMedia} from "./tenant-media.entity";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class MediaController extends KamController<TenantMedia> {
  constructor(public service: MediaService) {
    super(service);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getMany(@Headers('Authorization') authorization: string) {
    const token = ExtractTokenUtils(authorization);
    return this.service.getUserMedia(token);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  async createOne(
    @UploadedFile() uploadedFile: Express.Multer.File,
    @Headers('Authorization') authorization: string
  ) {
    let media = new TenantMedia();
    media = MediaEntityMapperUtils(media, uploadedFile);
    const token = ExtractTokenUtils(authorization);
    const user = await this.service.getUserFromToken(token);
    Object.assign(media, {user: {id: user.id}});
    return super.createOneBase(media);
  }
}

import {
  Controller,
  forwardRef,
  Get,
  Headers,
  Inject,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {ExtractTokenUtils, FileUploadingUtils, KamController, MediaEntityMapperUtils} from '@ionhour/backend-core'
import {AuthGuard} from '@nestjs/passport'
import {StorefrontMediaService} from "./storefront-media.service";
import {StorefrontTenantMedia} from "./storefront-media.entity";
import {StorefrontUsersService} from "../storefront-users/storefront-users.service";
import {PaginationObjectInterface} from "@ionhour/interfaces";

@Controller('media')
@ApiTags('Media')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class StorefrontMediaController extends KamController<StorefrontTenantMedia> {
  constructor(
    public service: StorefrontMediaService,
    @Inject(forwardRef(() => StorefrontUsersService)) private readonly userService: StorefrontUsersService
  ) {
    super(service);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getMany(@Headers('Authorization') authorization: string): Promise<PaginationObjectInterface<StorefrontTenantMedia>> {
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
    let media = new StorefrontTenantMedia(); // Extract logged-in user token from request
    media = MediaEntityMapperUtils(media, uploadedFile);
    const token = ExtractTokenUtils(authorization);
    const user = await this.userService.getUserFromToken(token); // Get logged-in user object
    Object.assign(media, {user: {id: user.id}}); // Add user id to uploaded media
    return super.createOneBase(media);
  }
}

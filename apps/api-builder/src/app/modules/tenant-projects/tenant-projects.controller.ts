import {Body, Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {TenantProject} from './tenant-projects.entity'
import {TenantProjectsService} from './tenant-projects.service'
import {AuthGuard} from '@nestjs/passport'
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {MediaService} from "../tenant-media/tenant-media.service";
import {TenantMedia} from "../tenant-media/tenant-media.entity";

@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TenantProjectsController extends KamController<TenantProject> {
  constructor(public service: TenantProjectsService, private mediaService: MediaService) {
    super(service)
  }

  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  @ApiConsumes('multipart/form-data')
  async createOne(@Body()  dto: TenantProject, @UploadedFile() uploadedFile: Express.Multer.File) {
    if(uploadedFile) {
      const logo = new TenantMedia();
      const screenshot = new TenantMedia();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = (uploadedFile.path).split(__dirname)[1];
      screenshot.destination = (uploadedFile.destination).split(__dirname)[1];
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(logo);
      dto.logo = logo;
    }
    // Object.assign(dto, {admin-categories: dto.admin-categories.map(cat => ({id: cat}))})
    return this.createOneBase(dto);
  }
}


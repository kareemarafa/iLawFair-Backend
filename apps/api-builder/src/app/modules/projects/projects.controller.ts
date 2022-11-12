import {Body, Controller, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Project} from './projects.entity'
import {ProjectsService} from './projects.service'
import {AuthGuard} from '@nestjs/passport'
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {MediaService} from "../media/media.service";
import {UserMedia} from "../media/user.media";

@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProjectsController extends KamController<Project> {
  constructor(public service: ProjectsService, private mediaService: MediaService) {
    super(service)
  }

  @UseInterceptors(FileUploadingUtils.singleFileUploader('file'))
  @ApiConsumes('multipart/form-data')
  async createOne(@Body()  dto: Project, @UploadedFile() uploadedFile: Express.Multer.File) {
    if(uploadedFile) {
      const logo = new UserMedia();
      const screenshot = new UserMedia();
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


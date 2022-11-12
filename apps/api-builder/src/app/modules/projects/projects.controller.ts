import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Project} from './projects.entity'
import {ProjectsService} from './projects.service'
import {AuthGuard} from '@nestjs/passport'
import {User} from "../users/users.entity";
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {MediaEntity} from "../media/media.entity";
import {MediaService} from "../media/media.service";

@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProjectsController extends KamController<Project> {
  constructor(public service: ProjectsService, private mediaService: MediaService) {
    super(service)
  }



  // @ApiConsumes('multipart/form-data')
  // async createOne(
  //    dto: Project,
  //   @UploadedFile() uploadedFile: Express.Multer.File,
  // ) {
  //   if(uploadedFile) {
  //     const logo = new MediaEntity();
  //     logo.filename = uploadedFile.filename;
  //     logo.path = (uploadedFile.path).split(__dirname)[1];
  //     logo.destination = (uploadedFile.destination).split(__dirname)[1];
  //     logo.mimetype = uploadedFile.mimetype;
  //     logo.user = {id: req.parsed.authPersist['user.id']} as User;
  //     // await this.mediaService.saveUploadedFile(logo);
  //     dto.logo = logo;
  //   }
  //   dto.user = {id: req.parsed.authPersist['user.id']} as User;
  //   // Object.assign(dto, {categories: dto.categories.map(cat => ({id: cat}))})
  //   return this.base.createOneBase(req, dto);
  // }
}


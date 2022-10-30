import {Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud'
import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Project} from './projects.entity'
import {ProjectsService} from './projects.service'
import {AuthGuard} from '@nestjs/passport'
import {User} from "../users/users.entity";
import {FileUploadingUtils} from "@ionhour/backend-core";
import {Media} from "../media/media.entity";
import {MediaService} from "../media/media.service";

@Crud({
  model: {
    type: Project
  },
  query: {
    filter: {
      isTemplate: {
        $eq: false
      }
    },
    exclude: ['isTemplate'],
    join: {
      pages: {
        eager: true
      },
      user: {
        eager: true,
        select: false
      },
      logo: {
        eager: true
      },
      categories: {
        eager: true
      }
    }
  },
  routes: {
    createOneBase: {
      interceptors: [FileUploadingUtils.singleFileUploader('logo')],
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
@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService, private mediaService: MediaService) {
  }

  get base(): CrudController<Project> {
    return this
  }

  @Override()
  @ApiConsumes('multipart/form-data')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Project,
    @UploadedFile() uploadedFile: any,
  ) {
    if(uploadedFile) {
      const logo = new Media();
      logo.filename = uploadedFile.filename;
      logo.path = uploadedFile.path;
      logo.destination = uploadedFile.destination;
      logo.mimetype = uploadedFile.mimetype;
      logo.user = {id: req.parsed.authPersist['user.id']} as User;
      await this.mediaService.saveUploadedFile(logo);
      dto.logo = logo;
    }
    dto.user = {id: req.parsed.authPersist['user.id']} as User;
    Object.assign(dto, {categories: dto.categories.map(cat => ({id: cat}))})
    return this.base.createOneBase(req, dto);
  }
}


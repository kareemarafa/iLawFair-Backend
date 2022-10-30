import {Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud'
import {Controller, UploadedFile, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Project} from './projects.entity'
import {ProjectsService} from './projects.service'
import {AuthGuard} from '@nestjs/passport'
import {Media} from "../media/media.entity";
import {MediaService} from "../media/media.service";
import {FileUploadingUtils} from "@ionhour/backend-core";

@Crud({
  model: {
    type: Project
  },
  query: {
    filter: {
      isTemplate: {
        $eq: true
      }
    },
    exclude: ['isTemplate'],
    join: {
      pages: {
        eager: true
      },
      category: {
        eager: true
      },
      screenshot: {
        eager: true
      },
      'pages.screenshot': {
        alias: 'pagesScreenshot',
        eager: true
      }
    }
  },
  routes: {
    createOneBase: {
      interceptors: [FileUploadingUtils.singleFileUploader('screenshot')],
    },
  },
})
@Controller('templates')
@ApiTags('Templates')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TemplatesController implements CrudController<Project> {
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
    if (uploadedFile) {
      const screenshot = new Media();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = uploadedFile.path;
      screenshot.destination = uploadedFile.destination;
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    dto.isTemplate = true;
    Object.assign(dto, {category: {id: dto.category}})
    return this.base.createOneBase(req, dto);
  }
}

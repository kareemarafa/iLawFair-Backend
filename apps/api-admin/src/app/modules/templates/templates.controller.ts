import {Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from "@nestjsx/crud";
import {CoreMedia, FileUploadingUtils} from "@ionhour/backend-core";
import {Controller, UploadedFile, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiConsumes, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {AdminTemplate} from "./template.entity";
import {TemplateService} from "./template.service";
import {AdminMediaService} from "../admin_media/admin-media.service";


@Crud({
  model: {
    type: AdminTemplate
  },
  query: {
    filter: {
      // isTemplate: {
      //   $eq: true
      // }
    },
    // exclude: ['isTemplate'],
    join: {
      pages: {
        eager: true
      },
      categories: {
        eager: true,
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
export class TemplatesController implements CrudController<AdminTemplate> {
  constructor(public service: TemplateService, private mediaService: AdminMediaService) {
  }

  get base(): CrudController<AdminTemplate> {
    return this
  }

  @Override()
  @ApiConsumes('multipart/form-data')
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: AdminTemplate,
    @UploadedFile() uploadedFile: Express.Multer.File,
  ) {
    if (uploadedFile) {
      const screenshot = new CoreMedia();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = (uploadedFile.path).split(__dirname)[1];
      screenshot.destination = (uploadedFile.destination).split(__dirname)[1];
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    // dto.isTemplate = true;
    Object.assign(dto, {categories: dto.categories.map(cat => ({id: cat}))})
    return this.base.createOneBase(req, dto);
  }
}

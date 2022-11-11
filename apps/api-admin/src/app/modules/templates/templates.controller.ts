import {CoreMedia, KamController} from "@ionhour/backend-core";
import {Body, Controller, UploadedFile, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiConsumes, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {AdminTemplate} from "./template.entity";
import {TemplateService} from "./template.service";
import {AdminMediaService} from "../admin_media/admin-media.service";

@Controller('templates')
@ApiTags('Templates')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TemplatesController extends KamController<AdminTemplate> {
  constructor(public service: TemplateService, private mediaService: AdminMediaService) {
    super(service)
  }

  @ApiConsumes('multipart/form-data')
  async createOne(@Body() dto: AdminTemplate, @UploadedFile() uploadedFile: Express.Multer.File) {
    if (uploadedFile) {
      const screenshot = new CoreMedia();
      screenshot.filename = uploadedFile.filename;
      screenshot.path = (uploadedFile.path).split(__dirname)[1];
      screenshot.destination = (uploadedFile.destination).split(__dirname)[1];
      screenshot.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    Object.assign(dto, {categories: dto.categories.map(cat => ({id: cat}))})
    return this.createOneBase(dto);
  }
}

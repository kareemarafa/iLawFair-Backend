import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {Body, Controller, UploadedFile, UseInterceptors} from "@nestjs/common";
import {ApiBearerAuth, ApiConsumes, ApiTags} from "@nestjs/swagger";
import {AdminTemplate} from "./admin-template.entity";
import {AdminTemplateService} from "./admin-template.service";
import {AdminMediaService} from "../admin-media/admin-media.service";
import {AdminMedia} from "../admin-media/admin-media.entity";
import {MessagePattern} from "@nestjs/microservices";

@Controller('templates')
@ApiTags('Templates')

export class AdminTemplatesController extends KamController<AdminTemplate> {
  constructor(public service: AdminTemplateService, private mediaService: AdminMediaService) {
    super(service)
  }

  // @UseGuards(AuthGuard('jwt'))
  // @ApiBearerAuth()
  @UseInterceptors(FileUploadingUtils.singleFileUploader('screenshot'))
  @ApiConsumes('multipart/form-data')
  async createOne(@Body() dto: AdminTemplate, @UploadedFile() uploadedFile: Express.Multer.File) {
    if (uploadedFile) {
      const screenshot = new AdminMedia();
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

  @MessagePattern({cmd: 'GET_ALL_TEMPLATES'})
  getMany() {
    return this.service.getMany({});
  }
}

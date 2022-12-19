import {FileUploadingUtils, KamController, MediaEntityMapperUtils} from "@ionhour/backend-core";
import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from "@nestjs/common";
import {ApiConsumes, ApiTags} from "@nestjs/swagger";
import {AdminTemplate} from "./admin-template.entity";
import {AdminTemplateService} from "./admin-template.service";
import {AdminMediaService} from "../admin-media/admin-media.service";
import {AdminMedia} from "../admin-media/admin-media.entity";
import {AuthGuard} from "@nestjs/passport";
import {DeepPartial} from "typeorm";

@Controller('templates')
@ApiTags('Templates')
@UseGuards(AuthGuard('jwt'))
export class AdminTemplatesController extends KamController<AdminTemplate> {
  constructor(
    public service: AdminTemplateService,
    private mediaService: AdminMediaService
  ) {
    super(service)
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('screenshot'))
  async createOne(@Body() dto: DeepPartial<AdminTemplate>, @UploadedFile() uploadedFile: Express.Multer.File) {
    if (uploadedFile) {
      let screenshot = new AdminMedia();
      screenshot = MediaEntityMapperUtils(screenshot, uploadedFile);
      await this.mediaService.saveUploadedFile(screenshot);
      dto.screenshot = screenshot;
    }
    return this.createOneBase(dto);
  }
}

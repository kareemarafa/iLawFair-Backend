import {ApiBearerAuth, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {Body, Controller, Get, Param, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {AdminCategory} from "./admin-categories.entity";
import {AdminCategoriesService} from "./admin-categories.service";
import {MessagePattern} from "@nestjs/microservices";
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {DeepPartial} from "typeorm";
import {AdminMedia} from "../admin-media/admin-media.entity";
import {AdminMediaService} from "../admin-media/admin-media.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('categories')
@ApiTags('Categories')
@ApiBearerAuth()
export class AdminCategoriesController extends KamController<AdminCategory> {
  constructor(public service: AdminCategoriesService,
              private mediaService: AdminMediaService
  ) {
    super(service);
  }

  @MessagePattern({cmd: 'GET_ALL_CATEGORIES'})
  getAllCategories({req}: { req: Express.Request }): Promise<AdminCategory[]> {
    return super.getManyBase(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileUploadingUtils.singleFileUploader('icon'))
  async createOne(@Body() dto: DeepPartial<AdminCategory>, @UploadedFile() uploadedFile: Express.Multer.File) {
    if (uploadedFile) {
      const icon = new AdminMedia();
      icon.filename = uploadedFile.filename;
      icon.path = (uploadedFile.path).split(__dirname)[1];
      icon.destination = (uploadedFile.destination).split(__dirname)[1];
      icon.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(icon);
      dto.icon = icon;
    }
    return this.createOneBase(dto);
  }
}

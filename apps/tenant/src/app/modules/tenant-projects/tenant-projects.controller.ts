import {Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import {ApiAcceptedResponse, ApiBearerAuth, ApiBody, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {TenantProject} from './tenant-projects.entity'
import {TenantProjectsService} from './tenant-projects.service'
import {AuthGuard} from '@nestjs/passport'
import {FileUploadingUtils, KamController} from "@ionhour/backend-core";
import {MediaService} from "../tenant-media/tenant-media.service";
import {TenantMedia} from "../tenant-media/tenant-media.entity";
import {DeepPartial} from "typeorm";
import {CreateProjectSuccessDto} from "./dto";

@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TenantProjectsController extends KamController<TenantProject> {
  constructor(public service: TenantProjectsService, private mediaService: MediaService) {
    super(service)
  }

  @Post()
  @UseInterceptors(FileUploadingUtils.singleFileUploader('logo'))
  @ApiConsumes('multipart/form-data')
  @ApiAcceptedResponse({type: CreateProjectSuccessDto, description: "Project success creation"})
  @ApiBody({ type: TenantProject })
  async createOneBase(@Body() dto: DeepPartial<TenantProject>, @UploadedFile() uploadedFile: Express.Multer.File) {
    if (uploadedFile) {
      const logo = new TenantMedia();
      logo.filename = uploadedFile.filename;
      logo.path = (uploadedFile.path).split(__dirname)[1];
      logo.destination = (uploadedFile.destination).split(__dirname)[1];
      logo.mimetype = uploadedFile.mimetype;
      await this.mediaService.saveUploadedFile(logo);
      dto.logo = logo;
    }
    if (dto?.pages?.length) {
      Object.assign(dto, {pages: dto.pages?.map(page => ({id: page}))})
    }
    return super.createOneBase(dto);
  }
}


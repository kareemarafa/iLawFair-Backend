import {
  Body,
  Controller,
  forwardRef, Get,
  Headers,
  Inject,
  Post, Query,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import {ApiAcceptedResponse, ApiBearerAuth, ApiBody, ApiConsumes, ApiTags} from '@nestjs/swagger'
import {TenantProject} from './tenant-projects.entity'
import {TenantProjectsService} from './tenant-projects.service'
import {AuthGuard} from '@nestjs/passport'
import {ExtractTokenUtils, FileUploadingUtils, KamController, MediaEntityMapperUtils} from "@ionhour/backend-core";
import {MediaService} from "../tenant-media/tenant-media.service";
import {TenantMedia} from "../tenant-media/tenant-media.entity";
import {CreateProjectSuccessDto} from "./dto";
import {TenantUsersService} from "../tenant-users/tenant-users.service";
import {PaginationObjectInterface} from "@ionhour/interfaces";

@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TenantProjectsController extends KamController<TenantProject> {
  constructor(
    public service: TenantProjectsService,
    private mediaService: MediaService,
    @Inject(forwardRef(() => TenantUsersService)) private readonly userService: TenantUsersService
  ) {
    super(service)
  }

  @Get()
  async getMany(
    @Headers('Authorization') authorization: string,
    @Query('page') page: number,
    @Query('take') take: number,
  ): Promise<PaginationObjectInterface<TenantProject>> {
    const token = ExtractTokenUtils(authorization);
    return this.service.getUserProjects(token, {page, take});
  }

  @Post()
  @UseInterceptors(FileUploadingUtils.singleFileUploader('logo'))
  @ApiConsumes('multipart/form-data')
  @ApiAcceptedResponse({type: CreateProjectSuccessDto, description: "Project success creation"})
  @ApiBody({type: TenantProject})
  async createOne(@Headers('Authorization') authorization: string,
                  @Body() dto: TenantProject,
                  @UploadedFile() uploadedFile: Express.Multer.File) {
    const token = ExtractTokenUtils(authorization); // Extract logged-in user token from request
    const user = await this.userService.getUserFromToken(token); // Get logged-in user object
    if (uploadedFile) {
      let logo = new TenantMedia();
      logo = MediaEntityMapperUtils(logo, uploadedFile);
      Object.assign(logo, {user: {id: user.id}}); // Add user id to uploaded media
      await this.mediaService.saveUploadedFile(logo);
      dto.logo = logo;
    }
    if (dto?.pages?.length) {
      Object.assign(dto, {pages: dto.pages?.map(page => ({id: page}))})
    }
    Object.assign(dto, {user: {id: user.id}}); // Add user id to project
    return super.createOneBase(dto);
  }
}


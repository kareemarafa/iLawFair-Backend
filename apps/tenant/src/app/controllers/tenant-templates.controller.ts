import {Controller, Get, Inject, Query, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {ClientProxy} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";
import {TenantProjectsService} from "../modules/tenant-projects/tenant-projects.service";
import {Not} from "typeorm";

@Controller('templates')
@ApiTags('Templates')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class TenantTemplatesController {

  constructor(
    @Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy,
    private readonly projectService: TenantProjectsService
  ) {
  }
  @Get()
  async findAll(@Query('keywords') keywords: Record<string, string>) {
    const tenantProjects = await this.projectService.getMany({
      order: {
        createdDate: "DESC"
      }
    })
    const lastCreatedProject = tenantProjects.length ? tenantProjects[0] : null;
    return lastValueFrom(this.adminService.send({cmd: 'GET_ALL_TEMPLATES'}, {keywords: lastCreatedProject ? lastCreatedProject.keywords : null}))
  }

}

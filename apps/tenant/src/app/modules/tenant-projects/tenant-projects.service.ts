import {BadRequestException, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantProject} from './tenant-projects.entity'
import {DeepPartial} from "typeorm";
import {BuilderType} from "@ionhour/interfaces";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class TenantProjectsService extends KamService<TenantProject> {
  constructor(@InjectRepository(TenantProject) repo) {
    super(repo)
  }

  createOne(dto: DeepPartial<TenantProject>): Promise<TenantProject> {
    const {builderType, pages} = dto;
    if (builderType === BuilderType.SINGLE_PAGE && pages?.length > 1) { // Check if tenant-pages length > 1 ---- INVALID
      throw new BadRequestException("Page limit exceeded")
    }
    return super.createOne(dto);
  }

  async updateOne(projectId: number, dto: TenantProject): Promise<TenantProject> {
    const project = await this.repo.findOne({where: {id: projectId}})
    const {builderType} = project; // Old data is here
    const {pages} = dto; // Updates is here
    if (builderType === BuilderType.SINGLE_PAGE && pages?.length > 1) { // Check if tenant-pages length > 1 ---- INVALID
      throw new BadRequestException("Page limit exceeded")
    }
    return super.updateOne(projectId, dto);
  }
}

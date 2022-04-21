import {BadRequestException, Injectable} from '@nestjs/common'
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {Project} from './projects.entity'
import {CrudRequest} from "@nestjsx/crud";
import {DeepPartial} from "typeorm";
import {BuilderType} from "@ionhour/interfaces";

@Injectable()
export class ProjectsService extends TypeOrmCrudService<Project> {
  constructor(@InjectRepository(Project) repo) {
    super(repo)
  }

  createOne(req: CrudRequest, dto: DeepPartial<Project>): Promise<Project> {
    const {builderType, pages} = dto;
    if (builderType === BuilderType.SINGLE_PAGE && pages?.length > 1) { // Check if pages length > 1 ---- INVALID
      throw new BadRequestException("Page limit exceeded")
    }
    return super.createOne(req, dto);
  }

  async updateOne(req: CrudRequest, dto: DeepPartial<Project>): Promise<Project> {
    const projectId = req.parsed.paramsFilter[0].value;
    const project = await this.repo.findOne({where: {id: projectId}})
    const {builderType} = project; // Old data is here
    const {pages} = dto; // Updates is here
    if (builderType === BuilderType.SINGLE_PAGE && pages?.length > 1) { // Check if pages length > 1 ---- INVALID
      throw new BadRequestException("Page limit exceeded")
    }
    return super.updateOne(req, dto);
  }
}

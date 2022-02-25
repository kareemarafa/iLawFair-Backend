import { Crud, CrudController } from '@nestjsx/crud'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Project } from './projects.entity'
import { ProjectsService } from './projects.service'

@Crud({
  model: {
    type: Project
  }
})
@Controller('Projects')
@ApiTags('projects')
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService) {}
}
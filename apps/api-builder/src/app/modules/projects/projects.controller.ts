import { Crud, CrudController } from '@nestjsx/crud'
import { Controller, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Project } from './projects.entity'
import { ProjectsService } from './projects.service'
import { AuthGuard } from '@nestjs/passport'

@Crud({
  model: {
    type: Project
  },
  query: {
    join: {
      pages: {
        eager: true
      },
      user: {
        eager: true,
        select: false
      }
    }
  }
})
@ApiBearerAuth()
@Controller('projects')
@ApiTags('projects')
@UseGuards(AuthGuard('jwt'))
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService) {}

  get base(): CrudController<Project> {
    return this
  }
}

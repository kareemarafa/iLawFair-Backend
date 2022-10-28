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
    exclude: ['isTemplate'],
    join: {
      pages: {
        eager: true
      },
      category: {
        eager: true
      }
    }
  }
})
@Controller('templates')
@ApiTags('Templates')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TemplatesController implements CrudController<Project> {
  constructor(public service: ProjectsService) {}
}

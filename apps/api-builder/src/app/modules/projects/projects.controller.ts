import {Crud, CrudAuth, CrudController} from '@nestjsx/crud'
import {Controller, UseGuards} from '@nestjs/common'
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger'
import {Project} from './projects.entity'
import {ProjectsService} from './projects.service'
import {AuthGuard} from '@nestjs/passport'
import {User} from "../users/users.entity";

@Crud({
  model: {
    type: Project
  },
  query: {
    filter: {
      isTemplate: {
        $eq: false
      }
    },
    exclude: ['isTemplate'],
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
@CrudAuth({
  property: 'user',
  filter: (user: User) => ({
    'user.id': user['userId'],
  }),
  persist: (user: User) => ({
    'user.id': user['userId'],
  }),
})
@Controller('projects')
@ApiTags('Projects')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService) {
  }

  get base(): CrudController<Project> {
    return this
  }
}

import { ComponentsModule } from './components/components.module'
import { UsersModule } from './users/users.module'
import { PagesModule } from './pages/pages.module'
import { AuthModule } from './auth/auth.module'
import { ProjectsModule } from './projects/projects.module'

export const features = [AuthModule, ComponentsModule, UsersModule, PagesModule, ProjectsModule]

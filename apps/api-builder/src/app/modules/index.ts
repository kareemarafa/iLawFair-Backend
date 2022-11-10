import {UsersModule} from './users/users.module'
import {PagesModule} from './pages/pages.module'
import {AuthModule} from './auth/auth.module'
import {ProjectsModule} from './projects/projects.module'
import {MediaModule} from './media/media.module'

export const features = [AuthModule, UsersModule, PagesModule, ProjectsModule, MediaModule]

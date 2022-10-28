import {UsersModule} from './users/users.module'
import {PagesModule} from './pages/pages.module'
import {AuthModule} from './auth/auth.module'
import {ProjectsModule} from './projects/projects.module'
import {SubscriptionsModule} from './subscriptions/subscriptions.module'
import {MediaModule} from './media/media.module'
import {MetaModule} from "./meta/meta.module";
import {CategoriesModule} from "./categories/categories.module";

export const features = [AuthModule, UsersModule, PagesModule, ProjectsModule, SubscriptionsModule, MediaModule, MetaModule, CategoriesModule]

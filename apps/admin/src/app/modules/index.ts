import { AdminUsersModule } from './admin-users/admin-users.module'
import {AdminMetaModule} from "./admin-meta/admin-meta.module";
import {AdminCategoriesModule} from "./admin-categories/admin-categories.module";
import {AdminTemplateModule} from "./admin-templates/admin-template.module";
import {AdminMediaModule} from "./admin-media/admin-media.module";
import {AdminPagesModule} from "./admin-pages/admin-pages.module";
import {AdminCustomersModule} from "./admin-customers/admin-customers.module";
import {AuthModule} from "./auth/auth.module";

export const features = [
  AuthModule,
  AdminMediaModule,
  AdminUsersModule,
  AdminMetaModule,
  AdminCategoriesModule,
  AdminTemplateModule,
  AdminPagesModule,
  AdminCustomersModule
]

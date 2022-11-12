import { AdminUsersModule } from './admin-users/admin-users.module'
import {AdminMetaModule} from "./admin-meta/admin-meta.module";
import {AdminCategoriesModule} from "./admin-categories/admin-categories.module";
import {AdminTemplateModule} from "./admin-templates/admin-template.module";
import {AdminAuthModule} from "./admin-auth/admin-auth.module";
import {AdminMediaModule} from "./admin-media/admin-media.module";

export const features = [AdminAuthModule, AdminMediaModule, AdminUsersModule,  AdminMetaModule, AdminCategoriesModule, AdminTemplateModule]

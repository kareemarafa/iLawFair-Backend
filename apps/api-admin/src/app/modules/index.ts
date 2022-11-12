import { AdminUsersModule } from './admin-users/admin-users.module'
import {AdminMetaModule} from "./admin-meta/admin-meta.module";
import {AdminCategoriesModule} from "./admin-categories/admin-categories.module";
import {AdminTemplateModule} from "./admin-templates/admin-template.module";

export const features = [AdminUsersModule,  AdminMetaModule, AdminCategoriesModule, AdminTemplateModule]

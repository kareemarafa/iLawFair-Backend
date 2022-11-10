import { AdminUsersModule } from './admin_users/admin-users.module'
import {MetaModule} from "./meta/meta.module";
import {CategoriesModule} from "./categories/categories.module";
import {TemplateModule} from "./templates/template.module";

export const features = [AdminUsersModule,  MetaModule, CategoriesModule, TemplateModule]

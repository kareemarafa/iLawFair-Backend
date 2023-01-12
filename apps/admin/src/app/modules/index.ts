import { AdminUsersModule } from './admin-users/admin-users.module'
import {AdminMetaModule} from "./admin-meta/admin-meta.module";
import {AdminMediaModule} from "./admin-media/admin-media.module";
import {AdminCustomersModule} from "./admin-customers/admin-customers.module";
import {AuthModule} from "./admin-auth/auth.module";

export const features = [
  AuthModule,
  AdminMediaModule,
  AdminUsersModule,
  AdminMetaModule,
  AdminCustomersModule
]

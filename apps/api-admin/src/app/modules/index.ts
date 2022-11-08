import { AdminUsersModule } from './admin_users/admin-users.module'
import { AdminSurveyModule } from './admin_survey/admin-survey.module'
import { AdminCustomerModule } from './admin_customers/admin-customers.module'
import { AdminPackagesModule } from './admin_packages/admin-packages.module'
import {AddonsModule} from "./admin_addons/addons.module";
import {AdminAuthModule} from "./admin_auth/admin-auth.module";

export const features = [AdminUsersModule, AdminSurveyModule, AdminCustomerModule, AdminPackagesModule, AddonsModule, AdminAuthModule]

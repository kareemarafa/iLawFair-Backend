import {TenantUsersModule} from './tenant-users/tenant-users.module'
import {TenantPagesModule} from './tenant-pages/tenant-pages.module'
import {TenantAuthModule} from './tenant-auth/tenant-auth.module'
import {TenantProjectsModule} from './tenant-projects/tenant-projects.module'
import {TenantMediaModule} from './tenant-media/tenant-media.module'

export const features = [TenantAuthModule, TenantUsersModule, TenantPagesModule, TenantProjectsModule, TenantMediaModule]

import {TenantUsersModule} from './tenant-users/tenant-users.module'
import {TenantAuthModule} from './tenant-auth/tenant-auth.module'
import {TenantMediaModule} from './tenant-media/tenant-media.module'

export const features = [TenantAuthModule, TenantUsersModule, TenantMediaModule]

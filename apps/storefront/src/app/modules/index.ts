import {StorefrontUsersModule} from './storefront-users/storefront-users.module'
import {StorefrontAuthModule} from './storefront-auth/storefront-auth.module'
import {StorefrontMediaModule} from './storefront-media/storefront-media.module'

export const features = [StorefrontAuthModule, StorefrontUsersModule, StorefrontMediaModule]

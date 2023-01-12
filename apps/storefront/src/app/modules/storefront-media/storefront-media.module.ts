import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {StorefrontMediaController} from './storefront-media.controller'
import {StorefrontUsersModule} from '../storefront-users/storefront-users.module'
import {StorefrontAuthModule} from '../storefront-auth/storefront-auth.module'
import {StorefrontMediaService} from "./storefront-media.service";
import {StorefrontTenantMedia} from "./storefront-media.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([StorefrontTenantMedia]),
    forwardRef(() => StorefrontAuthModule), forwardRef(() => StorefrontUsersModule)
  ],
  controllers: [StorefrontMediaController],
  providers: [StorefrontMediaService],
  exports: [StorefrontMediaService]
})
export class StorefrontMediaModule {
}

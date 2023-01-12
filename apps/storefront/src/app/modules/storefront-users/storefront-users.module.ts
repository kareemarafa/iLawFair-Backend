import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StorefrontUser } from './storefront-users.entity'
import { StorefrontUsersController } from './storefront-users.controller'
import { StorefrontUsersService } from './storefront-users.service'
import { StorefrontProfileController } from './storefront-profile.controller'
import { StorefrontAuthModule } from '../storefront-auth/storefront-auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([StorefrontUser]), StorefrontAuthModule],
  controllers: [StorefrontUsersController, StorefrontProfileController],
  providers: [StorefrontUsersService],
  exports: [StorefrontUsersService]
})
export class StorefrontUsersModule {}

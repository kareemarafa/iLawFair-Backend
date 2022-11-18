import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TenantUser } from './tenant-users.entity'
import { TenantUsersController } from './tenant-users.controller'
import { TenantUsersService } from './tenant-users.service'
import { ProfileController } from './tenant-profile.controller'
import { TenantAuthModule } from '../tenant-auth/tenant-auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([TenantUser]), TenantAuthModule],
  controllers: [TenantUsersController, ProfileController],
  providers: [TenantUsersService],
  exports: [TenantUsersService]
})
export class TenantUsersModule {}

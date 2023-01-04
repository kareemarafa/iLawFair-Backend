import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {MediaController} from './tenant-media.controller'
import {TenantUsersModule} from '../tenant-users/tenant-users.module'
import {TenantAuthModule} from '../tenant-auth/tenant-auth.module'
import {MediaService} from "./tenant-media.service";
import {TenantMedia} from "./tenant-media.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([TenantMedia]),
    forwardRef(() => TenantAuthModule), forwardRef(() => TenantUsersModule)
  ],
  controllers: [MediaController],
  providers: [MediaService],
  exports: [MediaService]
})
export class TenantMediaModule {
}

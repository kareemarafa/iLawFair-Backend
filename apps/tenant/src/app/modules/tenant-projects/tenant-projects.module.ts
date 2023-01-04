import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {TenantProjectsController} from './tenant-projects.controller'
import {TenantProjectsService} from './tenant-projects.service'
import {TenantProject} from './tenant-projects.entity'
import {TenantMediaModule} from "../tenant-media/tenant-media.module";
import {Contract} from "../shared";
import {TenantAuthModule} from "../tenant-auth/tenant-auth.module";
import {TenantUsersModule} from "../tenant-users/tenant-users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([TenantProject, Contract]),
    forwardRef(() => TenantAuthModule), forwardRef(() => TenantUsersModule),
    forwardRef(() => TenantMediaModule)
  ],
  controllers: [TenantProjectsController],
  providers: [TenantProjectsService],
  exports: [TenantProjectsService]
})
export class TenantProjectsModule {
}

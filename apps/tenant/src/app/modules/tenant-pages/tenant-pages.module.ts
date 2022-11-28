import {forwardRef, Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TenantPage } from './tenant-pages.entity'
import { TenantPagesService } from './tenant-pages.service'
import { PagesController } from './tenant-pages.controller'
import {TenantMediaModule} from "../tenant-media/tenant-media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([TenantPage]),
    forwardRef(() => TenantMediaModule)
  ],
  controllers: [PagesController],
  providers: [TenantPagesService],
  exports: [TenantPagesService]
})
export class TenantPagesModule {}

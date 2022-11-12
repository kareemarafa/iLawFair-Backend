import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AdminMeta} from "./admin-meta.entity";
import {AdminMetaService} from "./admin-meta.service";
import {AdminMetaController} from "./admin-meta.controller";

@Module({
  imports: [TypeOrmModule.forFeature([AdminMeta])],
  controllers: [AdminMetaController],
  providers: [AdminMetaService],
  exports: [AdminMetaService]
})
export class AdminMetaModule {
}

import {forwardRef, Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {AdminPage} from "./admin-pages.entity";
import {AdminMediaModule} from "../admin-media/admin-media.module";
import {AdminPagesController} from "./admin-pages.controller";
import {AdminPagesService} from "./admin-pages.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminPage]),
    forwardRef(() => AdminMediaModule)
  ],
  controllers: [AdminPagesController],
  providers: [AdminPagesService],
  exports: [AdminPagesService]
})
export class AdminPagesModule {}

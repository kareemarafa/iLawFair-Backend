import {forwardRef, Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Template} from "./template.entity";
import {TemplateService} from "./template.service";
import {TemplatesController} from "./templates.controller";
import {AdminMediaModule} from "../admin_media/admin-media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Template]),
    forwardRef(()=> AdminMediaModule)

  ],
  controllers: [TemplatesController],
  providers: [TemplateService],
  exports: [TemplateService]
})
export class TemplateModule {}

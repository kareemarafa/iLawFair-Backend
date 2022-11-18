import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AdminTemplate} from "./admin-template.entity";
import {AdminTemplateService} from "./admin-template.service";
import {AdminTemplatesController} from "./admin-templates.controller";
import {AdminMediaModule} from "../admin-media/admin-media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminTemplate]),
    forwardRef(() => AdminMediaModule)

  ],
  controllers: [AdminTemplatesController],
  providers: [AdminTemplateService],
  exports: [AdminTemplateService]
})
export class AdminTemplateModule {
}

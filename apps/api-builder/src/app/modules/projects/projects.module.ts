import {forwardRef, Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProjectsController} from './projects.controller'
import {ProjectsService} from './projects.service'
import {Project} from './projects.entity'
import {MediaModule} from "../media/media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Project]),
    forwardRef(() => MediaModule)
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})
export class ProjectsModule {
}

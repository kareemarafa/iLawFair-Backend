import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { Project } from './projects.entity'
import {TemplatesController} from "./templates.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController, TemplatesController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})
export class ProjectsModule {}

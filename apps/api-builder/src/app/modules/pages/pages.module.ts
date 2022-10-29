import {forwardRef, Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Page } from './pages.entity'
import { PagesService } from './pages.service'
import { PagesController } from './pages.controller'
import {MediaModule} from "../media/media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Page]),
    forwardRef(() => MediaModule)
  ],
  controllers: [PagesController],
  providers: [PagesService],
  exports: [PagesService]
})
export class PagesModule {}

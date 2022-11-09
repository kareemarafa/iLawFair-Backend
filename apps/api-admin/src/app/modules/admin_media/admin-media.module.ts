import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminMediaController } from './admin-media.controller'
import {AdminMediaService} from "./admin-media.service";
import {AdminMediaEntity} from "./admin-media.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AdminMediaEntity]),
    // forwardRef(() => AdminAuthModule), forwardRef(() => UsersModule)
  ],
  controllers: [AdminMediaController],
  providers: [AdminMediaService],
  exports: [AdminMediaService]
})
export class AdminMediaModule {}

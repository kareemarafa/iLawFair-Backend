import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminMediaController } from './admin-media.controller'
import {AdminMediaService} from "./admin-media.service";
import {AdminMedia} from "./admin.media";

@Module({
  imports: [TypeOrmModule.forFeature([AdminMedia]),
    // forwardRef(() => AdminAuthModule), forwardRef(() => UsersModule)
  ],
  controllers: [AdminMediaController],
  providers: [AdminMediaService],
  exports: [AdminMediaService]
})
export class AdminMediaModule {}

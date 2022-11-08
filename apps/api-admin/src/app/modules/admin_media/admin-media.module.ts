import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminMediaController } from './admin-media.controller'
import {CoreMedia} from "@ionhour/backend-core";
import {AdminMediaService} from "./admin-media.service";

@Module({
  imports: [TypeOrmModule.forFeature([CoreMedia]),
    // forwardRef(() => AdminAuthModule), forwardRef(() => UsersModule)
  ],
  controllers: [AdminMediaController],
  providers: [AdminMediaService],
  exports: [AdminMediaService]
})
export class AdminMediaModule {}

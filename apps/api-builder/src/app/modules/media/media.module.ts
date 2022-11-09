import { forwardRef, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MediaController } from './media.controller'
import { UsersModule } from '../users/users.module'
import { AuthModule } from '../auth/auth.module'
import {MediaService} from "./media.service";
import {MediaEntity} from "./media.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity]), forwardRef(() => AuthModule), forwardRef(() => UsersModule)],
  controllers: [MediaController],
  providers: [MediaService],
  exports: [MediaService]
})
export class MediaModule {}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminUsersController } from './admin-users.controller'
import { AdminUsersService } from './admin-users.service'
import { AdminUser } from './admin-users.entity'
import {AuthModule} from "../admin-auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser]), AuthModule],
  controllers: [AdminUsersController],
  providers: [AdminUsersService],
  exports: [AdminUsersService]
})
export class AdminUsersModule {}

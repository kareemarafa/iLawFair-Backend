import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users.entity'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { ProfileController } from './profile.controller'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UsersController, ProfileController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

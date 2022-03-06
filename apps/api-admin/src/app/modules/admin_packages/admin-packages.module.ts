import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Packages } from './admin-packages.entity'
import { AdminPackagesService } from './admin-packages.service'
import { AdminPackagesController } from './admin-packages.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Packages])],
  controllers: [AdminPackagesController],
  providers: [AdminPackagesService],
  exports: [AdminPackagesService]
})
export class AdminPackagesModule {}

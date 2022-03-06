import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminCustomer } from './admin-customers.entity'
import { AdminCustomerService } from './admin-customers.service'
import { AdminCustomerController } from './admin-customers.controller'

@Module({
  imports: [TypeOrmModule.forFeature([AdminCustomer])],
  controllers: [AdminCustomerController],
  providers: [AdminCustomerService],
  exports: [AdminCustomerService]
})
export class AdminCustomerModule {}

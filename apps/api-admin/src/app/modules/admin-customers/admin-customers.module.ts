import {Module} from "@nestjs/common";
import {AdminCustomersController} from "./admin-customers.controller";
import {AdminCustomersService} from "./admin-customers.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AdminCustomer} from "./admin-customers.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminCustomer])
  ],
  controllers: [AdminCustomersController],
  providers: [AdminCustomersService],
  exports: [AdminCustomersService]
})
export class AdminCustomersModule {
}

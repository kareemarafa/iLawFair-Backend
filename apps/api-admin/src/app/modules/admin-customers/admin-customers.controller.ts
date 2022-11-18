import {KamController} from "@ionhour/backend-core";
import {AdminCustomer} from "./admin-customers.entity";
import {AdminCustomersService} from "./admin-customers.service";
import {Controller} from "@nestjs/common";
import {MessagePattern} from "@nestjs/microservices";

@Controller('customers')
export class AdminCustomersController extends KamController<AdminCustomer> {
  constructor(public service: AdminCustomersService) {
    super(service);
  }

  @MessagePattern({cmd: 'CUSTOMER_REGISTER'})
  registerNewCustomer(data: Record<string, any>) {
    return this.service.createOne(data);
  }

  @MessagePattern({cmd: 'CUSTOMER_LOGIN'})
  loginCustomer(data: Record<string, any>) {
    return this.service.getOne(data);
  }
}

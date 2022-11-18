import {KamService} from "@ionhour/backend-core";
import {AdminCustomer} from "./admin-customers.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AdminCustomersService extends KamService<AdminCustomer> {
  constructor(@InjectRepository(AdminCustomer) repo: Repository<AdminCustomer>) {
    super(repo);
  }
}

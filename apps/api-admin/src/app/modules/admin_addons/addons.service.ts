import {Injectable} from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Addons} from "./addons.entity";

@Injectable()
export class AddonsService extends TypeOrmCrudService<Addons> {
  constructor(@InjectRepository(Addons) repo) {
    super(repo)
  }
}

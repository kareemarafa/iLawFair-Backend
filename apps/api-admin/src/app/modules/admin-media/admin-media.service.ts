import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {KamMediaService} from "@ionhour/backend-core";
import {AdminMediaEntity} from "./admin-media.entity";

@Injectable()
export class AdminMediaService extends KamMediaService<AdminMediaEntity> {
  constructor(@InjectRepository(AdminMediaEntity) repo) {
    super(repo)
  }
}

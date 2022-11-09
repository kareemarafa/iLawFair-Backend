import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { CoreMediaService} from "@ionhour/backend-core";
import {AdminMediaEntity} from "./admin-media.entity";

@Injectable()
export class AdminMediaService extends CoreMediaService<AdminMediaEntity> {
  constructor(@InjectRepository(AdminMediaEntity) repo) {
    super(repo)
  }
}

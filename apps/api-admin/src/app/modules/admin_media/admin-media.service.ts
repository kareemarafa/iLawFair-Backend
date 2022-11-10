import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import { CoreMediaService} from "@ionhour/backend-core";
import {AdminMedia} from "./admin.media";

@Injectable()
export class AdminMediaService extends CoreMediaService<AdminMedia> {
  constructor(@InjectRepository(AdminMedia) repo) {
    super(repo)
  }
}

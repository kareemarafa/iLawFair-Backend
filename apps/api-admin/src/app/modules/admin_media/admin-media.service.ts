import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CoreMedia, CoreMediaService} from "@ionhour/backend-core";

@Injectable()
export class AdminMediaService extends CoreMediaService<CoreMedia> {
  constructor(@InjectRepository(CoreMedia) repo) {
    super(repo)
  }
}

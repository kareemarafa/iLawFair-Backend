import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CoreMediaService} from "@ionhour/backend-core";
import {MediaEntity} from "./media.entity";

@Injectable()
export class MediaService extends CoreMediaService<MediaEntity> {
  constructor(@InjectRepository(MediaEntity) repo) {
    super(repo)
  }
}

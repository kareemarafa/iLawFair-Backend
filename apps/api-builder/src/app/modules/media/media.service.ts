import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MediaEntity} from "./media.entity";
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class MediaService extends KamService<MediaEntity> {
  constructor(@InjectRepository(MediaEntity) repo) {
    super(repo)
  }
}

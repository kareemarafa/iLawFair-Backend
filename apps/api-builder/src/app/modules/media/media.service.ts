import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserMedia} from "./user.media";
import {KamMediaService} from "@ionhour/backend-core";

@Injectable()
export class MediaService extends KamMediaService<UserMedia> {
  constructor(@InjectRepository(UserMedia) repo) {
    super(repo)
  }
}

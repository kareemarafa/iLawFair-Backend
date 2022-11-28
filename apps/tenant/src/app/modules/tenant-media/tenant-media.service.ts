import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {KamMediaService} from "@ionhour/backend-core";
import {TenantMedia} from "./tenant-media.entity";

@Injectable()
export class MediaService extends KamMediaService<TenantMedia> {
  constructor(@InjectRepository(TenantMedia) repo) {
    super(repo)
  }
}

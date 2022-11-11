import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {KamMediaService} from "@ionhour/backend-core";
import {AdminMedia} from "./adminMedia";

@Injectable()
export class AdminMediaService extends KamMediaService<AdminMedia> {
  constructor(@InjectRepository(AdminMedia) repo) {
    super(repo)
  }
}

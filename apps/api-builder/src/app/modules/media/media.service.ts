import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MediaEntity} from "./media.entity";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";

@Injectable()
export class MediaService extends TypeOrmCrudService<MediaEntity> {
  constructor(@InjectRepository(MediaEntity) repo) {
    super(repo)
  }
}

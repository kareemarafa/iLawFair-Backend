import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {KamMediaService} from "@ionhour/backend-core";
import {TenantMedia} from "./tenant-media.entity";
import {TenantUsersService} from "../tenant-users/tenant-users.service";
import {TenantUser} from "../tenant-users/tenant-users.entity";

@Injectable()
export class MediaService extends KamMediaService<TenantMedia> {
  constructor(
    @InjectRepository(TenantMedia) repo,
    @Inject(forwardRef(() => TenantUsersService)) private readonly userService: TenantUsersService
  ) {
    super(repo)
  }

  async getUserMedia(token: string): Promise<TenantMedia[]> {
    const user = await this.getUserFromToken(token);
    return super.getMany({
      relations: ['user'],
      where: {
        user: {id: user.id},
      }
    });
  }

  async getUserFromToken(token: string): Promise<TenantUser> {
    return this.userService.getUserFromToken(token);
  }
}

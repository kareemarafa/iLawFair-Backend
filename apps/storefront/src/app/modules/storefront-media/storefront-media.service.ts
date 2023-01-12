import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {KamMediaService} from "@ionhour/backend-core";
import {StorefrontTenantMedia} from "./storefront-media.entity";
import {StorefrontUsersService} from "../storefront-users/storefront-users.service";
import {PaginationObjectInterface} from "@ionhour/interfaces";

@Injectable()
export class StorefrontMediaService extends KamMediaService<StorefrontTenantMedia> {

  constructor(
    @InjectRepository(StorefrontTenantMedia) repo,
    @Inject(forwardRef(() => StorefrontUsersService)) private readonly userService: StorefrontUsersService
  ) {
    super(repo)
  }

  async getUserMedia(token: string): Promise<PaginationObjectInterface<StorefrontTenantMedia>> {
    const user = await this.userService.getUserFromToken(token);
    return super.getMany({
      relations: ['user'],
      where: {
        user: {id: user.id},
      }
    });
  }

}

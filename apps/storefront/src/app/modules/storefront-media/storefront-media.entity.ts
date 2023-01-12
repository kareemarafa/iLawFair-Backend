import {Entity, JoinColumn, ManyToOne} from "typeorm";
import {CoreMedia} from "@ionhour/backend-core";
import {StorefrontUser} from "../storefront-users/storefront-users.entity";

@Entity('media')
export class StorefrontTenantMedia extends CoreMedia {

  @ManyToOne(() => StorefrontUser, (user) => user.media, {eager: true, onDelete: 'CASCADE'})
  @JoinColumn()
  user: StorefrontUser
}

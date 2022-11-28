import {Entity, JoinColumn, ManyToOne} from "typeorm";
import {CoreMedia} from "@ionhour/backend-core";
import {TenantUser} from "../tenant-users/tenant-users.entity";

@Entity('media')
export class TenantMedia extends CoreMedia {

  @ManyToOne(() => TenantUser, (user) => user.media, {eager: true, onDelete: 'CASCADE'})
  @JoinColumn()
  user: TenantUser
}

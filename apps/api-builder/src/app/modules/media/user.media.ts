import {Entity, JoinColumn, ManyToOne} from "typeorm";
import {CoreMedia} from "@ionhour/backend-core";
import {User} from "../users/users.entity";

@Entity('media')
export class UserMedia extends CoreMedia{

  @ManyToOne(() => User, (user) => user.media, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User
}

import { CoreProjectEntity} from "@ionhour/backend-core";
import {Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {Type} from "class-transformer";
import {TenantPage} from "../tenant-pages/tenant-pages.entity";
import { TenantUser } from "../tenant-users/tenant-users.entity";


@Entity('projects')
export class TenantProject extends CoreProjectEntity{


  @OneToMany(() => TenantPage, (page) => page.project)
  pages: TenantPage[]

  @ManyToOne(() => TenantUser, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @Type((t) => TenantUser)
  @JoinColumn()
  user: TenantUser
}


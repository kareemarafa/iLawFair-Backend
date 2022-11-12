import { CoreProjectEntity} from "@ionhour/backend-core";
import {Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {Type} from "class-transformer";
import {Page} from "../pages/pages.entity";
import { User } from "../users/users.entity";


@Entity('projects')
export class Project extends CoreProjectEntity{


  @OneToMany(() => Page, (page) => page.project)
  pages: Page[]

  @ManyToOne(() => User, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @Type((t) => User)
  @JoinColumn()
  user: User
}


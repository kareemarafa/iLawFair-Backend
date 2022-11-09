import { CoreProjectEntity} from "@ionhour/backend-core";
import {Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Type} from "class-transformer";
import {Page} from "../pages/pages.entity";
import { User } from "../users/users.entity";
import {ValidateIf} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {MediaEntity} from "../media/media.entity";


@Entity('projects')
export class Project extends CoreProjectEntity{

  @OneToOne(() => MediaEntity)
  @JoinColumn()
  @ValidateIf(obj => !obj.isTemplate)
  @ApiProperty({type: 'file', nullable: true, required: false})
  logo: MediaEntity


  @OneToMany(() => Page, (page) => page.project)
  pages: Page[]

  @ManyToOne(() => User, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @Type((t) => User)
  @JoinColumn()
  user: User
}


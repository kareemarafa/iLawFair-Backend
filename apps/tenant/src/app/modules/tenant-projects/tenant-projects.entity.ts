import {CoreProjectEntity} from "@ionhour/backend-core";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Type} from "class-transformer";
import {TenantPage} from "../tenant-pages/tenant-pages.entity";
import {TenantUser} from "../tenant-users/tenant-users.entity";
import {ApiProperty} from "@nestjs/swagger";
import {TenantMedia} from "../tenant-media/tenant-media.entity";


@Entity('projects')
export class TenantProject extends CoreProjectEntity {

  @OneToMany(() => TenantPage, (page) => page.project)
  pages: TenantPage[]

  @ManyToOne(() => TenantUser, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @Type((t) => TenantUser)
  @JoinColumn()
  user: TenantUser

  @OneToOne(() => TenantMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  logo: TenantMedia

  @OneToOne(() => TenantMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: TenantMedia

  @Column()
  @ApiProperty({type: 'string', nullable: true, required: false, example: 'Resume,Portfolio'})
  keywords: string;
}


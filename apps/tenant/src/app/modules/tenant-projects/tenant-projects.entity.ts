import {CoreProjectEntity} from "@ionhour/backend-core";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Type} from "class-transformer";
import {TenantPage} from "../tenant-pages/tenant-pages.entity";
import {TenantUser} from "../tenant-users/tenant-users.entity";
import {ApiProperty} from "@nestjs/swagger";
import {TenantMedia} from "../tenant-media/tenant-media.entity";
import {Contract} from "../shared";
import {IsArray, IsLowercase, IsNotEmpty} from "class-validator";


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

  @Column({type: 'varchar', nullable: false})
  @IsNotEmpty()
  @IsLowercase()
  @ApiProperty({type: 'string', nullable: false, required: true})
  subdomain:string


  @OneToOne(() => TenantMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: TenantMedia

  @Column({type: 'json', nullable: false})
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({type: 'string', nullable: false, required: true, example: 'Resume,Portfolio'})
  keywords: string;

  @OneToOne(() => Contract)
  @JoinColumn()
  contract: Contract;
}


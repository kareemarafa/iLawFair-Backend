import {Entity, JoinColumn, JoinTable, ManyToMany, OneToOne} from "typeorm";
import {IsArray, IsOptional} from "class-validator";
import {CoreProjectEntity} from "@ionhour/backend-core";
import {ApiProperty} from "@nestjs/swagger";
import {AdminCategory} from "../admin-categories/admin-categories.entity";
import {AdminMedia} from "../admin-media/admin-media.entity";


@Entity('template')
export class AdminTemplate extends CoreProjectEntity {

  @ManyToMany(() => AdminCategory, (category) => category.templates)
  @JoinTable({name: 'admin-templates-admin-categories'})
  @IsOptional()
  @IsArray()
  @ApiProperty({type: [Number], required: false, nullable: true})
  categories: AdminCategory[]

  @OneToOne(() => AdminMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  logo: AdminMedia

  @OneToOne(() => AdminMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: AdminMedia
}

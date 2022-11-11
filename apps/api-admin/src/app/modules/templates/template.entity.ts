import {Entity, JoinColumn, JoinTable, ManyToMany, OneToOne} from "typeorm";
import {AdminCategory} from "../categories/categories.entity";
import {IsArray, IsOptional, ValidateIf} from "class-validator";
import {CoreProjectEntity} from "@ionhour/backend-core";
import {ApiProperty} from "@nestjs/swagger";
import {AdminMedia} from "../admin_media/adminMedia";


@Entity('template')
export class AdminTemplate extends CoreProjectEntity {

  @OneToOne(() => AdminMedia)
  @JoinColumn()
  @ValidateIf(obj => !!obj.isTemplate)
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: AdminMedia


  @ManyToMany(() => AdminCategory, (category) => category.templates)
  @JoinTable({name: 'templates-categories'})
  @IsOptional()
  @IsArray()
  @ApiProperty({type: [Number], required: false, nullable: true})
  categories: AdminCategory[]

}

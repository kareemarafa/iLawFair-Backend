import {Entity, JoinColumn, JoinTable, ManyToMany, OneToOne} from "typeorm";
import {Category} from "../categories/categories.entity";
import {IsArray, IsOptional, ValidateIf} from "class-validator";
import {ApiProperty} from "@nestjsx/crud/lib/crud";
import {CoreMedia, CoreProjectEntity} from "@ionhour/backend-core";


@Entity('template')
export class Template extends CoreProjectEntity {

  @OneToOne(() => CoreMedia)
  @JoinColumn()
  @ValidateIf(obj => !!obj.isTemplate)
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: CoreMedia


  @ManyToMany(() => Category, (category) => category.templates)
  @JoinTable({name: 'templates-categories'})
  @IsOptional()
  @IsArray()
  @ApiProperty({type: [Number], required: false, nullable: true})
  categories: Category[]

}

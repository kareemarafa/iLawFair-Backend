import {Entity, JoinTable, ManyToMany} from "typeorm";
import {AdminCategory} from "../categories/categories.entity";
import {IsArray, IsOptional} from "class-validator";
import {CoreProjectEntity} from "@ionhour/backend-core";
import {ApiProperty} from "@nestjs/swagger";


@Entity('template')
export class AdminTemplate extends CoreProjectEntity {


  @ManyToMany(() => AdminCategory, (category) => category.templates)
  @JoinTable({name: 'templates-categories'})
  @IsOptional()
  @IsArray()
  @ApiProperty({type: [Number], required: false, nullable: true})
  categories: AdminCategory[]

}

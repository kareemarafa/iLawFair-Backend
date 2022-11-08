import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, ManyToMany} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Template} from "../templates/template.entity";

const {CREATE, UPDATE} = CrudValidationGroups

@Entity('categories')
export class Category extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsString({always: true})
  @IsOptional({groups: [UPDATE]})
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  name: string

  @ManyToMany(() => Template, (category) => category.categories)
  templates: Template[]
}

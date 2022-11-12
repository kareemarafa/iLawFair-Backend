import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, ManyToMany} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {AdminTemplate} from "../admin-templates/admin-template.entity";

const {CREATE, UPDATE} = CrudValidationGroups

@Entity('categories')
export class AdminCategory extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsString({always: true})
  @IsOptional({groups: [UPDATE]})
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  name: string

  @ManyToMany(() => AdminTemplate, (category) => category.categories)
  templates: AdminTemplate[]
}

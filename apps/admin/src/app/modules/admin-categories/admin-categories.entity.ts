import {Column, Entity, ManyToMany} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {AdminTemplate} from "../admin-templates/admin-template.entity";


@Entity('categories')
export class AdminCategory extends CoreEntity {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  name: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: false, type: 'string', nullable: false})
  icon: string

  @ManyToMany(() => AdminTemplate, (category) => category.categories)
  templates: AdminTemplate[]
}

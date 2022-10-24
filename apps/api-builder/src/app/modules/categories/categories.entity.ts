import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, OneToMany} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Project} from "../projects/projects.entity";

const {CREATE, UPDATE} = CrudValidationGroups

@Entity('categories')
export class Category extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsString({always: true})
  @IsOptional({groups: [UPDATE]})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  name: string

  @OneToMany(() => Project, (project) => project.user)
  templates?: Project[]
}

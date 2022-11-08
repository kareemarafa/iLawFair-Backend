import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm'
import {IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {CrudValidationGroups} from '@nestjsx/crud'
import {CoreEntity} from '@ionhour/backend-core'
import {Project} from '../projects/projects.entity'
import {MediaEntity} from "../media/media.entity";

const {CREATE, UPDATE} = CrudValidationGroups

@Entity('pages')
export class Page extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  pageName: string

  @Column({type: 'json', nullable: true})
  @ApiProperty({required: false, type: 'json', nullable: true})
  @IsNotEmpty()
  components: string

  @OneToOne(() => MediaEntity)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: MediaEntity

  @ManyToOne(() => Project, (project) => project.pages)
  @IsNotEmpty()
  project: Project
}

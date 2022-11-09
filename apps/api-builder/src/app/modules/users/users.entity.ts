import { Column, Entity, OneToMany } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CrudValidationGroups } from '@nestjsx/crud'
import { Project } from '../projects/projects.entity'
import {MediaEntity} from "../media/media.entity";

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('users')
export class User extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  fullName: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsEmail({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  email: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  password: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  phone: string

  @OneToMany(() => Project, (project) => project.user)
  projects?: Project[]

  @OneToMany(() => MediaEntity, (media) => media.user)
  media?: MediaEntity[]
}

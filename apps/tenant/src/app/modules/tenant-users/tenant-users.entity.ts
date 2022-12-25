import { Column, Entity, OneToMany } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { TenantProject } from '../tenant-projects/tenant-projects.entity'
import {TenantMedia} from "../tenant-media/tenant-media.entity";
import {Exclude} from "class-transformer";


@Entity('users')
export class TenantUser extends CoreEntity {
  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  fullName: string

  @IsNotEmpty()
  @IsOptional()
  @IsEmail({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  email: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  // @Exclude()
  password: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  phone: string

  @OneToMany(() => TenantProject, (project) => project.user)
  projects?: TenantProject[]

  @OneToMany(() => TenantMedia, (media) => media.user)
  media?: TenantMedia[]
}

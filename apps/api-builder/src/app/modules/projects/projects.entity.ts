import { CrudValidationGroups } from '@nestjsx/crud'
import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('projects')
export class Project extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  themeFont: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  background: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  themeColor: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  logo: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  favicon: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  description: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  projectName: string
}

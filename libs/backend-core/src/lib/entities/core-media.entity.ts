import { CrudValidationGroups } from '@nestjsx/crud'
import {Column, Entity} from 'typeorm'
import { CoreEntity } from './core.entity'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('media')
export class CoreMedia extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  filename: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  path: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  destination: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  mimetype: string

}

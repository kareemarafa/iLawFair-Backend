import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { CrudValidationGroups } from '@nestjsx/crud'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('components')
export class Component extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  name: string

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  @ApiProperty({ required: false, type: 'string', nullable: true })
  description: string
}

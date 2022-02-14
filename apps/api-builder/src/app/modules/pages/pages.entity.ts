import { Column, Entity } from 'typeorm'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CrudValidationGroups } from '@nestjsx/crud'
import { CoreEntity } from '@ionhour/backend-core'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('Pages')
export class Page extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  pageName: string
}

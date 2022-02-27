import { CrudValidationGroups } from '@nestjsx/crud'
import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('media')
export class Media extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  description: string
}

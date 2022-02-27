import { CrudValidationGroups } from '@nestjsx/crud'
import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Status } from './enum'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('subscription')
export class Subscription extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsNumber(null, { always: true })
  @Column({ type: 'number', nullable: false })
  @ApiProperty({ required: true, type: 'number', nullable: false })
  transactionId: number

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsNumber(null, { always: true })
  @Column({ type: 'number', nullable: false })
  @ApiProperty({ required: true, type: 'number', nullable: false })
  amount: number

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @ApiProperty({ required: true, type: 'enum', nullable: false, enum: Status })
  @Column({ type: 'enum', enum: Status })
  enum: Status
}

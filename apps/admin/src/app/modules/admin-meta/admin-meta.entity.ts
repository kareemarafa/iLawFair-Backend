import {Column, Entity, Unique} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'


@Entity('meta')
export class AdminMeta extends CoreEntity {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  key: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  value: string
}

import {Column, Entity} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'


@Entity('meta')
export class AdminMeta extends CoreEntity {
  @IsNotEmpty()
  @IsString({always: true})
  @IsOptional()
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  key: string

  @IsNotEmpty()
  @IsString({always: true})
  @IsOptional()
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  value: string
}

import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

const {CREATE, UPDATE} = CrudValidationGroups

@Entity('meta')
export class Meta extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsString({always: true})
  @IsOptional({groups: [UPDATE]})
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  key: string

  @IsNotEmpty({groups: [CREATE]})
  @IsString({always: true})
  @IsOptional({groups: [UPDATE]})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  value: string
}

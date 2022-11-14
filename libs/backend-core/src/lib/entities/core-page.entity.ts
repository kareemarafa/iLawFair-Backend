import {Column} from 'typeorm'
import { CoreEntity } from './core.entity'
import {IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CorePage extends CoreEntity {
  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  pageName: string

  @Column({type: 'json', nullable: true})
  @ApiProperty({required: false, type: 'json', nullable: true})
  @IsNotEmpty()
  components: string
}

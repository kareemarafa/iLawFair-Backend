import {Column, Entity} from 'typeorm'
import { CoreEntity } from './core.entity'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


@Entity('media')
export class CoreMedia extends CoreEntity {
  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  filename: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  path: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  destination: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  mimetype: string
}

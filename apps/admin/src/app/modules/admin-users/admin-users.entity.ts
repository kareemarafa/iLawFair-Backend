import { CoreEntity } from '@ionhour/backend-core'
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity } from 'typeorm'
import {Exclude} from "class-transformer";


@Entity('users')
export class AdminUser extends CoreEntity {
   @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  fullName: string

  @IsNotEmpty()
  @IsOptional()
  @IsEmail({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  email: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @Exclude()
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  password: string
}

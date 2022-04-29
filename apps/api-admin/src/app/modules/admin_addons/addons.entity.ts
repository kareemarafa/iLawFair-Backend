import {CrudValidationGroups} from "@nestjsx/crud";
import {Column, Entity} from "typeorm";
import {CoreEntity} from "@ionhour/backend-core";
import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


const { CREATE, UPDATE } = CrudValidationGroups

@Entity('admin_addons')
export class Addons extends CoreEntity {
@IsNotEmpty({ groups: [CREATE] })
@IsOptional({ groups: [UPDATE] })
@IsString({ always: true })
@MaxLength(100, { always: true })
@Column({ type: 'varchar', length: 100, nullable: false })
@ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
title: string;

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  description: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  price: string
  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  logo: string
}

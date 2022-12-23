import {IsEnum, IsHexColor, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {CoreEntity} from "./core.entity";
import {BuilderType} from "../../../../interfaces/src";


export class CoreProjectEntity extends CoreEntity {

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  projectName: string

  @IsNotEmpty()
  @IsOptional()
  @IsHexColor()
  @MaxLength(100, )
  @Column({type: 'varchar', length: 100, nullable: true})
  @ApiProperty({required: false, type: 'string', nullable: true, maxLength: 100})
  color: string

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @Column({type: 'varchar', nullable: true})
  @ApiProperty({required: false, type: 'string', nullable: true})
  description: string

  @IsNotEmpty()
  @IsOptional()
  @IsEnum(BuilderType)
  @ApiProperty({required: false, type: 'enum', enum: BuilderType, default: BuilderType.SINGLE_PAGE})
  @Column('enum', {enum: BuilderType, default: BuilderType.SINGLE_PAGE})
  builderType!: BuilderType;
}

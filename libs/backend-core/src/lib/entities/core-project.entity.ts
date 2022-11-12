import {IsEnum, IsHexColor, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Column, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {BuilderType} from "@ionhour/interfaces";
import {CoreEntity} from "./core.entity";
import {CoreMedia} from "./core-media.entity";


export class CoreProjectEntity extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  projectName: string


  @IsNotEmpty()
  @IsOptional()
  @IsHexColor({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  color: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  description: string

  @IsNotEmpty()
  @IsOptional()
  @IsEnum(BuilderType, {always: true})
  @ApiProperty({required: false, type: 'enum', enum: BuilderType, default: BuilderType.MULTIPLE_PAGES})
  @Column('enum', {enum: BuilderType, default: BuilderType.MULTIPLE_PAGES})
  builderType!: BuilderType;
}

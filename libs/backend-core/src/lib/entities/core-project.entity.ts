import {IsEnum, IsHexColor, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {Column, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {BuilderType} from "@ionhour/interfaces";
import {CrudValidationGroups} from "@nestjsx/crud";
import {CoreEntity} from "./core.entity";

const {CREATE, UPDATE} = CrudValidationGroups

export class CoreProjectEntity extends CoreEntity{
@PrimaryGeneratedColumn()
  id: number;

@IsNotEmpty({groups: [CREATE]})
@IsOptional({groups: [UPDATE]})
@IsString({always: true})
@Column({type: 'varchar', nullable: false})
@ApiProperty({required: true, type: 'string', nullable: false})
  projectName: string


@IsNotEmpty({groups: [CREATE]})
@IsOptional({groups: [UPDATE]})
@IsHexColor({always: true})
@MaxLength(100, {always: true})
@Column({type: 'varchar', length: 100, nullable: false})
@ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  color: string

@IsNotEmpty({groups: [CREATE]})
@IsOptional({groups: [UPDATE]})
@IsString({always: true})
@Column({type: 'varchar', nullable: false})
@ApiProperty({required: true, type: 'string', nullable: false})
  description: string

@IsNotEmpty({groups: [CREATE]})
@IsOptional({groups: [UPDATE]})
@IsEnum(BuilderType, {always: true})
@ApiProperty({required: false, type: 'enum', enum: BuilderType, default: BuilderType.MULTIPLE_PAGES})
@Column('enum', {enum: BuilderType, default: BuilderType.MULTIPLE_PAGES})
  builderType!: BuilderType;

}

import { CoreEntity } from '@ionhour/backend-core'
import {IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity } from 'typeorm'
import { CrudValidationGroups } from '@nestjsx/crud'
import {QuestionType} from "@ionhour/interfaces";

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('admin_survey')
export class Survey extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  question: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsEnum(QuestionType, {always: true})
  @ApiProperty({ required: true, type: 'enum', enum: QuestionType})
  @Column('enum', {enum: QuestionType})
  questionType: string;
}

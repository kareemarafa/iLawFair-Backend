import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, ManyToOne, OneToMany, JoinColumn} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf
} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Page} from '../pages/pages.entity'
import {User} from '../users/users.entity'
import {BuilderType} from "@ionhour/interfaces";
import {Category} from "../categories/categories.entity";

const {CREATE, UPDATE} = CrudValidationGroups


@Entity('projects')
export class Project extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  projectName: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  logo: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
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

  @IsNotEmpty()
  @IsOptional({groups: [CREATE, UPDATE]})
  @IsBoolean({always: true})
  @ApiProperty({required: false, type: 'boolean', default: 0})
  @Column('boolean', {default: 0})
  isTemplate: boolean;

  @OneToMany(() => Page, (page) => page.project)
  pages: Page[]

  @ManyToOne(() => User, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @JoinColumn()
  user: User

  @ManyToOne(() => Category, (category) => category.templates, {eager: true, onDelete: 'CASCADE'})
  @JoinColumn()
  @IsOptional()
  @IsNotEmptyObject()
  category!: Category
}

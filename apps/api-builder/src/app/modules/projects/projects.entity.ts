import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, ManyToOne, OneToMany, JoinColumn, OneToOne, ManyToMany, JoinTable} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {
  IsArray,
  IsBoolean,
  IsEnum, IsHexColor,
  IsNotEmpty,
  IsNotEmptyObject, IsNumber, IsObject,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Page} from '../pages/pages.entity'
import {User} from '../users/users.entity'
import {BuilderType} from "@ionhour/interfaces";
import {Category} from "../categories/categories.entity";
import {Type} from "class-transformer";
import {Media} from "../media/media.entity";

const {CREATE, UPDATE} = CrudValidationGroups


@Entity('projects')
export class Project extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  projectName: string

  @OneToOne(() => Media)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  logo: Media

  @OneToOne(() => Media)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: Media

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

  @IsNotEmpty()
  @IsOptional({groups: [CREATE, UPDATE]})
  @Column('boolean', {default: 0})
  isTemplate: boolean;

  @OneToMany(() => Page, (page) => page.project)
  pages: Page[]

  @ManyToOne(() => User, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @Type((t) => User)
  @JoinColumn()
  user: User

  @ManyToMany(() => Category, (category) => category.templates)
  @JoinTable({name: 'templates-categories'})
  @IsOptional()
  @IsArray()
  @ApiProperty({type: [Number], required: false, nullable: true})
  categories: Category[]
}


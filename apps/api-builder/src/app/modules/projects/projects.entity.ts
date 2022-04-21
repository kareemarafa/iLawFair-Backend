import {CrudValidationGroups} from '@nestjsx/crud'
import {Column, Entity, ManyToOne, OneToMany, JoinColumn} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Page} from '../pages/pages.entity'
import {User} from '../users/users.entity'
import {BuilderType} from "@ionhour/interfaces";

const {CREATE, UPDATE} = CrudValidationGroups


@Entity('projects')
export class Project extends CoreEntity {
  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  themeFont: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  background: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  themeColor: string

  @IsOptional({always: true})
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: true})
  @ApiProperty({required: false, type: 'string', nullable: true, maxLength: 100})
  themeSecondaryColor: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  logo: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  favicon: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  description: string

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
  facebookUrl: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  instagramUrl: string

  @IsNotEmpty({groups: [CREATE]})
  @IsOptional({groups: [UPDATE]})
  @IsString({always: true})
  @Column({type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  twitterUrl: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsEnum(BuilderType, {always: true})
  @ApiProperty({ required: true, type: 'enum', enum: BuilderType, default: BuilderType.SINGLE_PAGE })
  @Column('enum', {enum: BuilderType, default: BuilderType.SINGLE_PAGE})
  builderType: string;

  @OneToMany(() => Page, (page) => page.project)
  pages: Page[]

  @ManyToOne(() => User, (user) => user.projects, {eager: true, onDelete: 'CASCADE'})
  @JoinColumn()
  user: User
}

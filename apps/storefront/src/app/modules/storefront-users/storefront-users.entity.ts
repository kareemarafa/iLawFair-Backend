import { Column, Entity, OneToMany } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import {StorefrontTenantMedia} from "../storefront-media/storefront-media.entity";


@Entity('users')
export class StorefrontUser extends CoreEntity {
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
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  email: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  password: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  @ApiProperty({ required: true, type: 'string', nullable: false, maxLength: 100 })
  phone: string

  @OneToMany(() => StorefrontTenantMedia, (media) => media.user)
  media?: StorefrontTenantMedia[]
}

import { CrudValidationGroups } from '@nestjsx/crud'
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../users/users.entity'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('media')
export class Media extends CoreEntity {
  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  filename: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  path: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  destination: string

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ required: true, type: 'string', nullable: false })
  mimetype: string

  @ManyToOne(() => User, (user) => user.media, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User
}

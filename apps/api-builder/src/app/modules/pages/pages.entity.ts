import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm'
import {IsNotEmpty, IsOptional, IsString, MaxLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {CoreEntity} from '@ionhour/backend-core'
import {Project} from '../projects/projects.entity'
import {UserMedia} from "../media/user.media";


@Entity('pages')
export class Page extends CoreEntity {
  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  pageName: string

  @Column({type: 'json', nullable: true})
  @ApiProperty({required: false, type: 'json', nullable: true})
  @IsNotEmpty()
  components: string

  @OneToOne(() => UserMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: UserMedia

  @ManyToOne(() => Project, (project) => project.pages)
  @IsNotEmpty()
  project: Project
}

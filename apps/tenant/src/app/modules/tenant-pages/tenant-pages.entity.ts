import {Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm'
import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {CorePage} from '@ionhour/backend-core'
import {TenantProject} from '../tenant-projects/tenant-projects.entity'
import {TenantMedia} from "../tenant-media/tenant-media.entity";


@Entity('pages')
export class TenantPage extends CorePage {
  @OneToOne(() => TenantMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: TenantMedia

  @ManyToOne(() => TenantProject, (project) => project.pages)
  @IsNotEmpty()
  project: TenantProject
}

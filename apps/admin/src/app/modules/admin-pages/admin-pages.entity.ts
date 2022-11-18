import {Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm'
import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {CorePage} from '@ionhour/backend-core'
import {AdminMedia} from "../admin-media/admin-media.entity";
import {AdminTemplate} from "../admin-templates/admin-template.entity";

@Entity('pages')
export class AdminPage extends CorePage {
  @OneToOne(() => AdminMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  screenshot: AdminMedia

  @ManyToOne(() => AdminTemplate, (template) => template.pages)
  @IsNotEmpty()
  template: AdminTemplate
}

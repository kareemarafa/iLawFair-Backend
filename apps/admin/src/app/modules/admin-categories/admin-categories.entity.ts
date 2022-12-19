import {Column, Entity, JoinColumn, ManyToMany, OneToOne} from 'typeorm'
import {CoreEntity} from '@ionhour/backend-core'
import {IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {AdminTemplate} from "../admin-templates/admin-template.entity";
import {AdminMedia} from "../admin-media/admin-media.entity";


@Entity('categories')
export class AdminCategory extends CoreEntity {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({unique: true, type: 'varchar', nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false})
  name: string

  @OneToOne(() => AdminMedia)
  @JoinColumn()
  @ApiProperty({type: 'file', nullable: true, required: false})
  icon: AdminMedia

  @ManyToMany(() => AdminTemplate, (category) => category.categories)
  templates: AdminTemplate[]
}

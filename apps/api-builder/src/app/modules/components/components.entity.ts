import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'

@Entity('components')
export class ComponentsEntity extends CoreEntity {
  @Column()
  name: string
}

import { Column, Entity } from 'typeorm'
import { CoreEntity } from '@ionhour/backend-core'

@Entity('components')
export class Component extends CoreEntity {
  @Column()
  name: string
}

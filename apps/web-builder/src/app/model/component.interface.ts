import { Type } from '@angular/core'

export interface ComponentItem {
  componentClass: Type<any>
  data?: any
}

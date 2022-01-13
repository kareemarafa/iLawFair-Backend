import { Type } from '@angular/core'

export interface ComponentItem {
  componentClass: Type<any>
  componentName: string
  data?: any
}

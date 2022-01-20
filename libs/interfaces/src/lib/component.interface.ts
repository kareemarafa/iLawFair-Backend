import { Type } from '@angular/core'

export interface GenericComponent {
  name: string
}

export interface IComponent {
  componentName: string
  componentClass: Type<any>
}

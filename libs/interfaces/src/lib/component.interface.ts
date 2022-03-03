import { Type } from '@angular/core'

export interface GenericComponent {
  name: string
}

export interface ComponentDate {
  image?: string
  title?: string
  text?: string
}

export interface IComponent {
  componentName: string
  componentClass: Type<any>
  componentData?: ComponentDate[]
}

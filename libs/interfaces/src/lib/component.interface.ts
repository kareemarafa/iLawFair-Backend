import { Type } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'

export interface GenericComponent {
  name: string
}

export interface KeyData {
  value: string
  style?: string
}

export interface ComponentDate {
  image?: string
  title?: KeyData
  text?: KeyData
  btn?: string
  items?: ComponentDate[]
  icon?: string
}

export interface IComponent {
  componentName: string
  componentClass: Type<any>
  componentData?: ComponentDate[]
  model: any
  fields: FormlyFieldConfig[]
}

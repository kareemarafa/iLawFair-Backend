import { FormControl } from '@angular/forms'
import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/material/form-field'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-field-file',
  template: ` <input type="file" [formControl]="formControl" [formlyAttributes]="field" /> `
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldFile extends FieldType {
  override formControl!: FormControl
}

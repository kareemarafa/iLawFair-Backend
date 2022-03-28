import { Component } from '@angular/core'
import { FieldType } from '@ngx-formly/material/form-field'

@Component({
  selector: 'ionhour-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent extends FieldType {
  customPalette = {
    id: 'custom1',
    name: 'Custom palette',
    colors: ['#000000', '#ffffff', '#d10606', '#edd818', '#f77b07', '#076902', '#10d5eb', '#020bf7']
  }

  colorChange(color: string) {
    return this.formControl.setValue(color)
  }
}

import { Component } from '@angular/core';
import {FieldType} from "@ngx-formly/material/form-field";

@Component({
  selector: 'ionhour-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.css']
})
export class IconPickerComponent extends FieldType {

  constructor() {
    super();
  }

  onIconPickerSelect(newIcon: string) {
    return this.formControl.setValue(newIcon)
  }
}

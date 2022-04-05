import { Component, ElementRef, ViewChild } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-password-type',
  template: `
    <mat-form-field class="w-100">
      <mat-label>{{ field?.templateOptions?.label }}</mat-label>
      <input matInput #passwordField type="password" [formControl]="formControl" [formlyAttributes]="field" />
      <mat-icon matSuffix class="toggle-password" (click)="showHidePassword()">remove_red_eye</mat-icon>
    </mat-form-field>
  `,
  styles: ['.toggle-password { color: #ccc; cursor: pointer; }']
})
export class MaterialPasswordTypeComponent extends FieldType {
  override formControl!: FormControl
  @ViewChild('passwordField', { static: false }) passwordField!: ElementRef

  public showHidePassword() {
    this.passwordField.nativeElement.type = this?.passwordField?.nativeElement.type == 'password' ? 'text' : 'password'
  }
}

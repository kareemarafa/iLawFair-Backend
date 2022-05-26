import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentControlDirective, HOCSectionStyleControlDirective, SectionStyleControlDirective } from './directives'
import {
  ComponentControlComponent,
  ComponentDynamicFormComponent,
  FileValueAccessor,
  FormlyFieldFile, IconPickerComponent,
  PanelWrapperComponent,
  RepeatTypeComponent,
  UserGalleryComponent
} from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ToasterService } from './services'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { InjectionToken } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { GalleryDialogComponent } from './components'
import { MatDialogModule } from '@angular/material/dialog'
import { ColorPickerComponent } from './components/color-picker/color-picker.component'
import { ColorPickerModule } from 'ngx-color-picker'
import { HttpClientModule } from '@angular/common/http'
import { MaterialPasswordTypeComponent } from './components/password-type.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FontSelectorComponent } from './components/font-selector/font-selector.component'
import { MatSelectModule } from '@angular/material/select'
import { IconPickerModule } from 'ngx-icon-picker';

export const APP_CONFIG = new InjectionToken('Application config')

export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null
  }

  if (passwordConfirm === password) {
    return null
  }

  return { fieldMatch: { message: 'Password Not Matching' } }
}

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconPickerModule,
    FormlyModule.forRoot({
      validators: [{ name: 'fieldMatch', validation: fieldMatchValidator }],
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
        { name: 'colorLibraryPicker', component: ColorPickerComponent },
        { name: 'iconPicker', component: IconPickerComponent },
        { name: 'gallery', component: GalleryDialogComponent },
        { name: 'password', component: MaterialPasswordTypeComponent },
        { name: 'fontSelector', component: FontSelectorComponent }
      ]
    }),
    FormlyMaterialModule,
    FlexModule,
    MatDialogModule,
    ColorPickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    ComponentControlComponent,
    ComponentControlDirective,
    ComponentDynamicFormComponent,
    RepeatTypeComponent,
    FileValueAccessor,
    FormlyFieldFile,
    UserGalleryComponent,
    GalleryDialogComponent,
    MaterialPasswordTypeComponent,
    ColorPickerComponent,
    FontSelectorComponent,
    SectionStyleControlDirective,
    HOCSectionStyleControlDirective,
    IconPickerComponent
  ],
  exports: [
    ComponentControlComponent,
    ComponentControlDirective,
    SectionStyleControlDirective,
    HOCSectionStyleControlDirective,
    ComponentDynamicFormComponent
  ],
  providers: [ToasterService]
})
export class CoreModule {}

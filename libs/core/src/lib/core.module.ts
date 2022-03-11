import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentControlDirective } from './directives'
import {
  ComponentControlComponent,
  ComponentDynamicFormComponent,
  ComponentOptionComponent,
  FileValueAccessor,
  FormlyFieldFile,
  PanelWrapperComponent,
  RepeatTypeComponent,
  UserGalleryComponent
} from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ToasterService } from './services'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { InjectionToken } from '@angular/core'
import { FlexModule } from '@angular/flex-layout'
import { GalleryDialogComponent } from './components/gallery-dialog/gallery-dialog.component'
import { MatDialogModule } from '@angular/material/dialog'

export const APP_CONFIG = new InjectionToken('Application config')

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
    FormlyModule.forRoot({
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
        { name: 'gallery', component: GalleryDialogComponent, wrappers: ['form-field'] }
      ]
    }),
    FormlyMaterialModule,
    FlexModule,
    MatDialogModule
  ],
  declarations: [
    ComponentControlComponent,
    ComponentControlDirective,
    ComponentOptionComponent,
    ComponentDynamicFormComponent,
    RepeatTypeComponent,
    FileValueAccessor,
    FormlyFieldFile,
    UserGalleryComponent,
    GalleryDialogComponent
  ],
  exports: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent, ComponentDynamicFormComponent],
  providers: [ToasterService]
})
export class CoreModule {}

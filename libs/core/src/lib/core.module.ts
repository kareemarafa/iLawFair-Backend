import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentControlDirective } from './directives'
import { ComponentControlComponent, ComponentDynamicFormComponent, ComponentOptionComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ToasterService } from './services'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'

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
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  declarations: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent, ComponentDynamicFormComponent],
  exports: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent, ComponentDynamicFormComponent],
  providers: [ToasterService]
})
export class CoreModule {}

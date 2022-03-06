import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentControlDirective } from './directives'
import { ComponentControlComponent, ComponentOptionComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { FormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ToasterService } from './services'

@NgModule({
  imports: [CommonModule, DragDropModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSnackBarModule, FormsModule],
  declarations: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent],
  exports: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent],
  providers: [ToasterService]
})
export class CoreModule {}

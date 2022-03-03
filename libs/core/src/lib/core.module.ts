import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ComponentControlDirective } from './directives'
import { ComponentControlComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ComponentOptionComponent } from './components/component-option/component-option.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, DragDropModule, MatButtonModule, MatIconModule, MatTooltipModule, FormsModule],
  declarations: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent],
  exports: [ComponentControlComponent, ComponentControlDirective, ComponentOptionComponent]
})
export class CoreModule {}

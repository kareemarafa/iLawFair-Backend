import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarAComponent, NavbarBComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent],
  imports: [CommonModule, DragDropModule],
  exports: [NavbarAComponent]
})
export class NavbarModule {}

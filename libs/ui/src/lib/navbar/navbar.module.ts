import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarAComponent, NavbarBComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { CoreModule } from '@ionhour/core'

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent],
  imports: [CommonModule, DragDropModule, MatButtonModule, MatIconModule, CoreModule],
  exports: [NavbarAComponent]
})
export class NavbarModule {}

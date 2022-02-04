import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActionAComponent } from './components/action-a/action-a.component'
import { ActionBComponent } from './components/action-b/action-b.component'

@NgModule({
  declarations: [ActionAComponent, ActionBComponent],
  imports: [CommonModule]
})
export class ActionModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActionAComponent, DialogDataExampleDialog } from './components/action-a/action-a.component'
import { ActionBComponent } from './components/action-b/action-b.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [ActionAComponent, ActionBComponent, DialogDataExampleDialog],
  imports: [CommonModule, HttpClientModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule]
})
export class ActionModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubscriptionsListComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { FlexModule } from '@angular/flex-layout'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTableModule } from '@angular/material/table'

const routes: Route[] = [
  {
    path: '',
    component: SubscriptionsListComponent
  }
]

@NgModule({
  declarations: [SubscriptionsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, FlexModule, MatTooltipModule, MatTableModule]
})
export class SubscriptionsModule {}

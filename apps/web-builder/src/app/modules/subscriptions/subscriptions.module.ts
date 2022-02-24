import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubscriptionsListComponent } from './components'
import { Route, RouterModule } from '@angular/router'

const routes: Route[] = [
  {
    path: '',
    component: SubscriptionsListComponent
  }
]

@NgModule({
  declarations: [SubscriptionsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SubscriptionsModule {}

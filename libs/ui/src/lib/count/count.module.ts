import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CountAComponent } from './components/count-a/count-a.component'
import { CountBComponent } from './components/count-b/count-b.component'

@NgModule({
  declarations: [CountAComponent, CountBComponent],
  imports: [CommonModule]
})
export class CountModule {}

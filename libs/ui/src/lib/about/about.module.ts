import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoreModule } from '@ionhour/core'
import { AboutAComponent } from './components'

@NgModule({
  declarations: [AboutAComponent],
  imports: [CommonModule, CoreModule]
})
export class AboutModule {}

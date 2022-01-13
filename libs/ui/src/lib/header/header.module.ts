import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './components'
import { CoreModule } from '@ionhour/core'

@NgModule({
  declarations: [HeaderAComponent, HeaderBComponent, HeaderCComponent],
  imports: [CommonModule, CoreModule]
})
export class HeaderModule {}

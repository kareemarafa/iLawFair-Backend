import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StatisticsAComponent } from './components'
import {CoreModule} from "@ionhour/core";

@NgModule({
  declarations: [StatisticsAComponent],
  imports: [CommonModule, CoreModule]
})
export class StatisticsModule {}

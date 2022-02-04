import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ServiceAComponent } from './components/service-a/service-a.component'
import { ServiceBComponent } from './components/service-b/service-b.component'
import { ServiceCComponent } from './components/service-c/service-c.component'
import { ServiceDComponent } from './components/service-d/service-d.component'

@NgModule({
  declarations: [ServiceAComponent, ServiceBComponent, ServiceCComponent, ServiceDComponent],
  imports: [CommonModule]
})
export class ServiceModule {}

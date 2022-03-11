import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-prices-a',
  templateUrl: './prices-a.component.html',
  styleUrls: ['./prices-a.component.scss']
})
export class PricesAComponent {
  @Input() componentData: any
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-statistics-a',
  templateUrl: './statistics-a.component.html',
  styleUrls: ['./statistics-a.component.scss']
})
export class StatisticsAComponent {
  @Input() componentData: any
}

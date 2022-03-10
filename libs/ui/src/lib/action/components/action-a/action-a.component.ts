import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-action-a',
  templateUrl: './action-a.component.html',
  styleUrls: ['./action-a.component.scss']
})
export class ActionAComponent {
  @Input() componentData: any
}

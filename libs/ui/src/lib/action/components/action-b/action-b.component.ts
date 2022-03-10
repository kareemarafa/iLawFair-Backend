import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-action-b',
  templateUrl: './action-b.component.html',
  styleUrls: ['./action-b.component.scss']
})
export class ActionBComponent {
  @Input() componentData: any
}

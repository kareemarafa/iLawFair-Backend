import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-team-b',
  templateUrl: './team-b.component.html',
  styleUrls: ['./team-b.component.scss']
})
export class TeamBComponent {
  @Input() componentData: any
}

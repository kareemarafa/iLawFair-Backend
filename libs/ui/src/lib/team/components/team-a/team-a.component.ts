import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-team-a',
  templateUrl: './team-a.component.html',
  styleUrls: ['./team-a.component.scss']
})
export class TeamAComponent {
  @Input() componentData: any
}

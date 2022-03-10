import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.scss']
})
export class HeaderCComponent {
  @Input() componentData: any
}

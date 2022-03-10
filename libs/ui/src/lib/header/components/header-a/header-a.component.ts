import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-header-a',
  templateUrl: './header-a.component.html',
  styleUrls: ['./header-a.component.scss']
})
export class HeaderAComponent {
  @Input() componentData: any
}

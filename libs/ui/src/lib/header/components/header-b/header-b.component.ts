import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-header-b',
  templateUrl: './header-b.component.html',
  styleUrls: ['./header-b.component.scss']
})
export class HeaderBComponent {
  @Input() componentData: any
}

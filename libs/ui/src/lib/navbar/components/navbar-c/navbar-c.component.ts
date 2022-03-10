import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-navbar-c',
  templateUrl: './navbar-c.component.html',
  styleUrls: ['./navbar-c.component.scss']
})
export class NavbarCComponent {
  @Input() componentData: any
}

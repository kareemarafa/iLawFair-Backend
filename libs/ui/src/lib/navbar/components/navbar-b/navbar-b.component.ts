import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-navbar-b',
  templateUrl: './navbar-b.component.html',
  styleUrls: ['./navbar-b.component.scss']
})
export class NavbarBComponent {
  @Input() componentData: any
}

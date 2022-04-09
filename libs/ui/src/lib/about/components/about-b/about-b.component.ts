import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-about-b',
  templateUrl: './about-b.component.html',
  styleUrls: ['./about-b.component.scss']
})
export class AboutBComponent {
  @Input() componentData: any
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-social-a',
  templateUrl: './social-a.component.html',
  styleUrls: ['./social-a.component.scss']
})
export class SocialAComponent {
  @Input() componentData: any
}

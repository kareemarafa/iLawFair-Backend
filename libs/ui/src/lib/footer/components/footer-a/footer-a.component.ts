import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-footer-a',
  templateUrl: './footer-a.component.html',
  styleUrls: ['./footer-a.component.scss']
})
export class FooterAComponent {
  @Input() componentData: any
}

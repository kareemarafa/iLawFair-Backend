import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-footer-b',
  templateUrl: './footer-b.component.html',
  styleUrls: ['./footer-b.component.css']
})
export class FooterBComponent {
  @Input() componentData: any
}

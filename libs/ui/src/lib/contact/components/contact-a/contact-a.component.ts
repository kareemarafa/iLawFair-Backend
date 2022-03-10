import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-contact-a',
  templateUrl: './contact-a.component.html',
  styleUrls: ['./contact-a.component.scss']
})
export class ContactAComponent {
  @Input() componentData: any
}

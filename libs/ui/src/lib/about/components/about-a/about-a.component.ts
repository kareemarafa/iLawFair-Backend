import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.scss']
})
export class AboutAComponent {
  @Input()
  componentData: any
}

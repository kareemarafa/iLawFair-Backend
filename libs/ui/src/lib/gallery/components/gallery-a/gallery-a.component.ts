import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-gallery-a',
  templateUrl: './gallery-a.component.html',
  styleUrls: ['./gallery-a.component.scss']
})
export class GalleryAComponent {
  @Input() componentData: any
}

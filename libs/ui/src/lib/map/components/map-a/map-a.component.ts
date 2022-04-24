import {Component, Input} from '@angular/core'

@Component({
  selector: 'ionhour-map-a',
  templateUrl: './map-a.component.html',
  styleUrls: ['./map-a.component.scss']
})
export class MapAComponent {
  @Input() componentData!: any;
}

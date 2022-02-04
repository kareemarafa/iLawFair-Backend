import { Component, OnInit } from '@angular/core'

declare let google: { maps: { Map: new (arg0: HTMLElement | null, arg1: { center: { lat: number; lng: number }; zoom: number }) => any } }

@Component({
  selector: 'ionhour-map-a',
  templateUrl: './map-a.component.html',
  styleUrls: ['./map-a.component.scss']
})
export class MapAComponent implements OnInit {
  map: any

  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  }
}

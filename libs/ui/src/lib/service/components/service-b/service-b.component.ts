import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-service-b',
  templateUrl: './service-b.component.html',
  styleUrls: ['./service-b.component.scss']
})
export class ServiceBComponent implements OnInit {
  componentData: any = {
    title: `Section Title`,
    items: [
      {
        icon: `fa-handshake-o`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      },
      {
        icon: `fa-handshake-o`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      },
      {
        icon: `fa-handshake-o`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}

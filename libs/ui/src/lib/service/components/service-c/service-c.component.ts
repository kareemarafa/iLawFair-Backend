import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-service-c',
  templateUrl: './service-c.component.html',
  styleUrls: ['./service-c.component.scss']
})
export class ServiceCComponent implements OnInit {
  componentData: any = {
    items: [
      {
        icon: `fa-handshake-o`,
        title: `Item Title`
      },
      {
        icon: `fa-handshake-o`,
        title: `Item Title`
      },
      {
        icon: `fa-handshake-o`,
        title: `Item Title`
      },
      {
        icon: `fa-handshake-o`,
        title: `Item Title`
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}

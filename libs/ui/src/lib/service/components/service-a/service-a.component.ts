import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-service-a',
  templateUrl: './service-a.component.html',
  styleUrls: ['./service-a.component.scss']
})
export class ServiceAComponent implements OnInit {
  @Input()
  componentData: any

  // componentData: any = {
  //   title: `Service A Title`,
  //   text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
  //   btn: `Click Here`,
  //   items: [
  //     {
  //       icon: `fa-handshake-o`,
  //       title: `Item Title`,
  //       text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
  //     },
  //     {
  //       icon: `fa-handshake-o`,
  //       title: `Item Title`,
  //       text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
  //     },
  //     {
  //       icon: `fa-handshake-o`,
  //       title: `Item Title`,
  //       text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
  //     }
  //   ]
  // }

  constructor() {}

  ngOnInit(): void {
    console.log(this.componentData)
  }
}

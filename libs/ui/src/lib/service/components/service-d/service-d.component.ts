import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-service-d',
  templateUrl: './service-d.component.html',
  styleUrls: ['./service-d.component.scss']
})
export class ServiceDComponent implements OnInit {
  componentData: any = {
    title: `Section Title`,
    items: [
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rarM9V28hOnv9NSjiQCIwTzd_-WKbJ0MjA&usqp=CAU`,
        btn: `Click here`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rarM9V28hOnv9NSjiQCIwTzd_-WKbJ0MjA&usqp=CAU`,
        btn: `Click here`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rarM9V28hOnv9NSjiQCIwTzd_-WKbJ0MjA&usqp=CAU`,
        btn: `Click here`,
        title: `Item Title`,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
      }
    ]
  }
  constructor() {}

  ngOnInit(): void {}
}

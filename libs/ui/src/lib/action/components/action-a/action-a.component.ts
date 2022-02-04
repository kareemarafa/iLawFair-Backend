import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-action-a',
  templateUrl: './action-a.component.html',
  styleUrls: ['./action-a.component.scss']
})
export class ActionAComponent implements OnInit {
  componentData: any = {
    title: `Section A Title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
    btn: `Click Here`
  }

  constructor() {}

  ngOnInit(): void {}
}

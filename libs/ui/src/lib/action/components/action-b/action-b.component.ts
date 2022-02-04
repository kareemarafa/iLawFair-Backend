import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-action-b',
  templateUrl: './action-b.component.html',
  styleUrls: ['./action-b.component.scss']
})
export class ActionBComponent implements OnInit {
  componentData: any = {
    title: `Section A Title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
    btn: `Click Here`
  }

  constructor() {}

  ngOnInit(): void {}
}

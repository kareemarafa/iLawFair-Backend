import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-team-b',
  templateUrl: './team-b.component.html',
  styleUrls: ['./team-b.component.scss']
})
export class TeamBComponent implements OnInit {
  componentData: any = {
    title: `Section Title`,
    teams: [
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Front-end developer`,
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Back-end developer`,
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Android developer`,
        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}

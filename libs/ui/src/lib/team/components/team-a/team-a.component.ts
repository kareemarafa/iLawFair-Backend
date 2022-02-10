import { Component } from '@angular/core'

@Component({
  selector: 'ionhour-team-a',
  templateUrl: './team-a.component.html',
  styleUrls: ['./team-a.component.scss']
})
export class TeamAComponent {
  componentData: any = {
    title: `Section Title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
    teams: [
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Front-end developer`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Back-end developer`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
        name: `Sam`,
        role: `Android developer`
      }
    ]
  }
}

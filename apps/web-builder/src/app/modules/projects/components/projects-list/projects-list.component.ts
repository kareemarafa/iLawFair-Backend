import { Component } from '@angular/core'

export interface Project {
  name: string
  theme: {
    color?: string
    font?: string
    logo?: string
    favIcon?: string
    background?: string
  }
  pages: string[]
  scripts?: []
  styles?: []
}

const ELEMENT_DATA: Project[] = [
  {
    name: 'Restaurant',
    theme: {
      color: '#ff7675',
      font: 'Arial',
      logo: './assets/logo.jpeg'
    },
    pages: ['home', 'about']
  },
  {
    name: 'Hospital',
    theme: {
      color: '#1abc9c',
      font: 'Arial',
      logo: './assets/logo2.png'
    },
    pages: ['home', 'about', 'career']
  }
]

@Component({
  selector: 'ionhour-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  dataSource = ELEMENT_DATA
}

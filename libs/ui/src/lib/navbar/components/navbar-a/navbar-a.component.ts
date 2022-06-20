import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'ionhour-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarAComponent implements OnInit {
  @Input() componentData!: any;
  currentProject: any;

  constructor() {
    this.currentProject = JSON.parse(localStorage.getItem('currentProject') ?? '');
  }


  ngOnInit() {
    const {logo} = this.currentProject;
    this.componentData.logo.src = logo;
    this.componentData.logo.height = 50;
    this.componentData.logo.width = 75;
  }

}

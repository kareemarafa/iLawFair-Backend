import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'ionhour-navbar-b',
  templateUrl: './navbar-b.component.html',
  styleUrls: ['./navbar-b.component.scss']
})
export class NavbarBComponent implements OnInit {
  @Input() componentData: any
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

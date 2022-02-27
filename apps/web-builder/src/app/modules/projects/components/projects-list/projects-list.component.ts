import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProjectsService } from '../../projects.service'
import { takeWhile } from 'rxjs'
import { PaginationObjectInterface, Project } from '@ionhour/interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'ionhour-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  alive = true
  list!: PaginationObjectInterface<Project>

  constructor(private service: ProjectsService, public router: Router) {}

  loadList() {
    this.service
      .loadList()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => (this.list = data))
  }

  ngOnInit() {
    this.loadList()
  }

  ngOnDestroy() {
    this.alive = false
  }
}

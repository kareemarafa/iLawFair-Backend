import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsListComponent, ProjectsFormComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

const routes: Route[] = [
  {
    path: '',
    component: ProjectsListComponent
  },
  {
    path: 'create',
    component: ProjectsFormComponent
  }
]

@NgModule({
  declarations: [ProjectsListComponent, ProjectsFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule, MatButtonModule, MatIconModule]
})
export class ProjectsModule {}

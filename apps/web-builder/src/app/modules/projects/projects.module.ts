import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsListComponent, ProjectsFormComponent } from './components'
import { Route, RouterModule } from '@angular/router'

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
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProjectsModule {}

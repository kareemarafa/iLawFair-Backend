import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route, RouterModule } from '@angular/router'
import { ShellComponent } from './shell.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { Shell } from './shell.service'

const routes: Route[] = [
  Shell.childRoutes([
    {
      path: '',
      redirectTo: 'projects'
    },
    {
      path: 'projects',
      loadChildren: () => import('../projects/projects.module').then((m) => m.ProjectsModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ])
]

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class ShellModule {}

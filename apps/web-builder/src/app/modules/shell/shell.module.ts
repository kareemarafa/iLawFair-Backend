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
import { ProfileComponent } from './profile/profile.component'
import { MediaComponent } from './media/media.component'

const routes: Route[] = [
  Shell.childRoutes([
    {
      path: '',
      redirectTo: 'profile'
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'media',
      component: MediaComponent
    },
    {
      path: 'projects',
      loadChildren: () => import('../projects/projects.module').then((m) => m.ProjectsModule)
    },
    {
      path: 'subscriptions',
      loadChildren: () => import('../subscriptions/subscriptions.module').then((m) => m.SubscriptionsModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ])
]

@NgModule({
  declarations: [ShellComponent, MediaComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class ShellModule {}
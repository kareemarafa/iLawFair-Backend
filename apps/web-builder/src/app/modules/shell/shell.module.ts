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
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexModule } from '@angular/flex-layout'
import { FormlyMatSliderModule } from '@ngx-formly/material/slider'
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { MatCardModule } from '@angular/material/card'
import { CoreModule } from '@ionhour/core'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ChartjsModule } from '@ctrl/ngx-chartjs'
import { MatExpansionModule } from '@angular/material/expansion'

const routes: Route[] = [
  Shell.childRoutes([
    {
      path: '',
      redirectTo: 'view'
    },
    {
      path: 'view',
      component: DashboardComponent
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
  declarations: [ShellComponent, ProfileComponent, MediaComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormlyModule,
    ReactiveFormsModule,
    FlexModule,
    FormlyMatSliderModule,
    FormlyMatToggleModule,
    FormlyMaterialModule,
    MatCardModule,
    CoreModule,
    ChartjsModule,
    MatExpansionModule
  ]
})
export class ShellModule {}

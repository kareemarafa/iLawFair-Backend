import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'builder',
    loadChildren: () => import('./modules/builder/builder.module').then((m) => m.BuilderModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

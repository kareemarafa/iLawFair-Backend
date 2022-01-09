import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAComponent } from 'libs/ui/src/lib/navbar/components';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: NavbarAComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }

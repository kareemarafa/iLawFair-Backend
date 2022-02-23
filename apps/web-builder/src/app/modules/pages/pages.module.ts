import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesFormComponent, PagesListComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { FlexModule } from '@angular/flex-layout'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatInputModule } from '@angular/material/input'

const routes: Route[] = [
  {
    path: '',
    component: PagesListComponent
  },
  {
    path: 'create',
    component: PagesFormComponent
  }
]

@NgModule({
  declarations: [PagesListComponent, PagesFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexModule,
    MatTooltipModule,
    MatInputModule
  ]
})
export class PagesModule {}

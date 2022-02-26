import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectsListComponent, ProjectsFormComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { FlexModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatChipsModule } from '@angular/material/chips'
import { FormlyModule } from '@ngx-formly/core'
import { CoreModule } from '@ionhour/core'
import { FormlyMatSliderModule } from '@ngx-formly/material/slider'
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle'
import { FormlyMaterialModule } from '@ngx-formly/material'

const routes: Route[] = [
  {
    path: '',
    component: ProjectsListComponent
  },
  {
    path: 'create',
    component: ProjectsFormComponent
  },
  {
    path: 'edit',
    component: ProjectsFormComponent
  }
]

@NgModule({
  declarations: [ProjectsListComponent, ProjectsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    CoreModule,
    FormlyModule.forRoot(),
    FormlyMatSliderModule,
    FormlyMatToggleModule,
    FormlyMaterialModule
  ]
})
export class ProjectsModule {}

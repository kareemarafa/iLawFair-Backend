import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent, RegisterComponent, SurveyComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormlyMatSliderModule } from '@ngx-formly/material/slider'
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { CoreModule } from '@ionhour/core'
import { FormlyModule } from '@ngx-formly/core'

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  }
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SurveyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule,
    MatCardModule,
    MatButtonModule,
    FormlyMatSliderModule,
    FormlyMatToggleModule,
    FormlyMaterialModule,
    CoreModule,
    FormsModule,
    FormlyModule
  ]
})
export class AuthModule {}

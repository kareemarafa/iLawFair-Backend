import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent, RegisterComponent, SurveyComponent } from './components'
import { Route, RouterModule } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

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
    path: 'admin_survey',
    component: SurveyComponent
  }
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SurveyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatInputModule, ReactiveFormsModule, FlexModule, MatCardModule, MatButtonModule]
})
export class AuthModule {}

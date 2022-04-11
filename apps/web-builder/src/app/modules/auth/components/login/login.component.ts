import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../auth.service'
import { finalize, lastValueFrom, takeWhile } from 'rxjs'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'ionhour-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  form: FormGroup
  alive = true
  model: any = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
      }
    },
    {
      key: 'password',
      type: 'password',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true
      }
    }
  ]

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router) {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    this.authService
      .login(this.model)
      .pipe(takeWhile(() => this.alive))
      .subscribe(async () => {
        const profile = await lastValueFrom(this.authService.getProfile())
        localStorage.setItem('user', JSON.stringify(profile))
        if (profile) {
          this.router.navigate(['dashboard/view'])
        }
      })
  }

  ngOnDestroy() {
    this.alive = false
  }
}

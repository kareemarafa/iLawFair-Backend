import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../auth.service'
import { takeWhile } from 'rxjs'

@Component({
  selector: 'ionhour-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router) {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
    this.form.controls['email'].setValue('owner@app.com')
    this.form.controls['password'].setValue('123456789')
  }

  login() {
    const payload = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.authService
      .login(payload)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.router.navigate(['dashboard/projects']))
  }

  ngOnDestroy() {
    this.alive = false
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { takeWhile } from 'rxjs'
import { AuthService } from '../../auth.service'

@Component({
  selector: 'ionhour-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
    this.form.controls['email'].setValue('owner@app.com')
    this.form.controls['password'].setValue('123456789')
  }

  register() {
    const payload = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.authService
      .register(payload)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.router.navigate(['dashboard/projects']))
  }

  ngOnDestroy() {
    this.alive = false
  }
}

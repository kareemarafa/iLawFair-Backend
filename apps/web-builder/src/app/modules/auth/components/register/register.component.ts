import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { takeWhile } from 'rxjs'
import { AuthService } from '../../auth.service'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'ionhour-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'first name',
        placeholder: 'Enter first name',
        required: true
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'last name',
        placeholder: 'Enter last name',
        required: true
      }
    },
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'username',
        placeholder: 'Enter user name',
        required: true
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'email',
        placeholder: 'Enter email',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'password',
        placeholder: 'Enter password',
        required: true
      }
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'phone number',
        placeholder: 'Enter phone number',
        required: true
      }
    }
  ]
  model: any = {}
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      password: [''],
      phone: ['']
    })
  }

  ngOnInit() {
    console.log('init')
  }

  register() {
    console.log(this.model)
    this.authService
      .register(this.model)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.router.navigate(['auth/survey']))
  }

  ngOnDestroy() {
    this.alive = false
  }
}

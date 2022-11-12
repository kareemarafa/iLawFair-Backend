import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { lastValueFrom, takeWhile } from 'rxjs'
import { AuthService } from '../../auth.service'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { countries } from '../../../../common/countries'

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
      fieldGroupClassName: 'row',
      validators: {
        validation: [{ name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } }]
      },
      fieldGroup: [
        {
          className: 'col-6',
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
          className: 'col-6',
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
          className: 'col-6',
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
          className: 'col-6',
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
          className: 'col-6',
          key: 'password',
          type: 'password',
          templateOptions: {
            type: 'password',
            label: 'password',
            placeholder: 'Enter password',
            required: true
          }
        },
        {
          className: 'col-6',
          key: 'passwordConfirm',
          type: 'password',
          templateOptions: {
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true
          }
        },
        {
          className: 'col-3 country-space',
          key: 'countryCode',
          type: 'select',
          templateOptions: {
            type: 'text',
            label: 'Country',
            placeholder: 'Code',
            required: true,
            options: countries.map((country) => ({ value: country.id, label: country.id + ' ' + country.label }))
          }
        },
        {
          className: 'col-3',
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
    const data = {
      ...this.model,
      phone: this.model.countryCode + this.model.phone
    }
    delete data.countryCode
    this.authService
      .register(data)
      .pipe(takeWhile(() => this.alive))
      .subscribe(async () => {
        const profile = await lastValueFrom(this.authService.getProfile())
        localStorage.setItem('user', JSON.stringify(profile))
        if (profile) {
          this.router.navigate(['tenant-auth/survey'])
        }
      })
  }

  ngOnDestroy() {
    this.alive = false
  }
}

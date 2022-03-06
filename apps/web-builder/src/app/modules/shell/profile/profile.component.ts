import { Component } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'
import { lastValueFrom } from 'rxjs'

@Component({
  selector: 'ionhour-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  form: FormGroup
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
        required: false
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
    const profile$ = authService.getProfile()
    lastValueFrom(profile$).then((data) => this.form.patchValue(data))
  }

  update() {
    return this.authService
      .updateProfile(this.model)
      .pipe()
      .subscribe((response) => console.log(response))
  }
}

import { Component } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'
import { lastValueFrom } from 'rxjs'
import { TranslateService } from '@ngx-translate/core';

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
        required: true
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.firstName'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.firstName'),
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        type: 'text',
        required: true
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.lastName'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.lastName'),
      }
    },
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text',
        required: true
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.userName'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.userName'),
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        required: true
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.email'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.email'),
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        required: false
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.password'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.password'),
      }
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        type: 'text',
        required: true
      },
      expressionProperties: {
        'templateOptions.label': () => this.translation.instant('profile.phoneNumber'),
        'templateOptions.placeholder': () => this.translation.instant('enter') + ' ' + this.translation.instant('profile.phoneNumber'),
      }
    }
  ]
  model: any = {}

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, public translation: TranslateService) {
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

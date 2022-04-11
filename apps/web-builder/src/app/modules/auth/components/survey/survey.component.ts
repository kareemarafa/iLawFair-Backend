import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'ionhour-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit, OnDestroy {
  form: FormGroup
  model = {}

  fields: FormlyFieldConfig[] = [
    {
      key: 'question1',
      type: 'select',
      templateOptions: {
        label: 'What do you want to create?',
        options: [
          { label: 'Web Page', value: 'iron_man' },
          { label: 'Landing Page', value: 'captain_america' },
          { label: 'Event Page', value: 'black_widow' },
          { label: 'Website', value: 'hulk' },
          { label: 'Web Store (Ecommerce)', value: 'captain_marvel' },
          { label: 'E-Menu', value: 'captain_marvel' }
        ]
      }
    },
    {
      key: 'question2',
      type: 'select',
      templateOptions: {
        label: 'What is your industry?',
        options: [
          { label: 'Real state', value: 'iron_man' },
          { label: 'Food', value: 'captain_america' },
          { label: 'Sports', value: 'black_widow' },
          { label: 'Fashion', value: 'hulk' },
          { label: 'Machinery', value: 'captain_marvel' }
        ]
      }
    },
    {
      key: 'question3',
      type: 'select',
      templateOptions: {
        label: 'Are you designing this for?',
        options: [
          { label: 'You', value: 'iron_man' },
          { label: 'Your client', value: 'captain_america' }
        ]
      }
    },
    {
      key: 'question4',
      type: 'select',
      templateOptions: {
        label: 'What is your position in the company?',
        options: [
          { label: 'Business Owner', value: '1' },
          { label: 'Marketing', value: '2' },
          { label: 'Blogger', value: '3' },
          { label: 'Developer', value: '4' },
          { label: 'Other', value: '5' }
        ]
      }
    },
    {
      key: 'question6',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Other role?',
        placeholder: 'Enter your role',
        required: true
      },
      hideExpression: (model) => model['question4'] !== '5'
    },
    {
      key: 'question5',
      type: 'select',
      templateOptions: {
        label: 'Did you designed a website before?',
        options: [
          { label: 'Yes', value: 'iron_man' },
          { label: 'No', value: 'captain_america' }
        ]
      }
    }
  ]

  constructor(private formBuilder: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {
    console.log('init')
  }

  login() {
    return this.router.navigate(['dashboard/view'])
  }

  ngOnDestroy() {
    console.log('SurveyComponent Destroyed')
  }
}

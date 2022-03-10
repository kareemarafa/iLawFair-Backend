import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CountAComponent } from './components/count-a/count-a.component'
import { CountdownModule } from 'ngx-countdown'

@NgModule({
  declarations: [CountAComponent],
  imports: [CommonModule, CountdownModule]
})
export class CountModule {}

export const countComponentData = {
  sectionHead: 'Counter',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  date: `7-4-2022`,
  time: `09:00`
}

export const countFields = [
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Edit Content' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'sectionHead',
        type: 'input',
        templateOptions: {
          label: 'Heading',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'sectionHeadColor',
        type: 'input',
        templateOptions: {
          type: 'color',
          label: 'Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'input',
        templateOptions: {
          type: 'color',
          label: 'Color'
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Counter' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-6',
        key: 'date',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Date',
          required: true
        }
      },
      {
        className: 'col-6',
        key: 'time',
        type: 'input',
        templateOptions: {
          type: 'time',
          label: 'Time',
          required: true
        }
      }
    ]
  }
]

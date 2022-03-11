import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactAComponent } from './components/contact-a/contact-a.component'

@NgModule({
  declarations: [ContactAComponent],
  imports: [CommonModule]
})
export class ContactModule {}

export const contactComponentData = {
  title: 'Contact us',
  elements: [
    {
      label: 'Address',
      value: '12 three four, five 6 - seven'
    },
    {
      label: 'Phone',
      value: '+20 124848974'
    },
    {
      label: 'Email',
      value: 'email@example.com'
    }
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

export const contactFields = [
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Title' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'input',
        templateOptions: {
          type: 'color',
          label: 'Title Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'input',
        templateOptions: {
          type: 'color',
          label: 'Title Color'
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'elements',
    type: 'repeat',
    templateOptions: {
      label: 'Elements',
      addText: 'Add element'
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'input',
          key: 'label',
          templateOptions: {
            label: 'Label'
          }
        },
        {
          type: 'input',
          key: 'value',
          templateOptions: {
            label: 'Value'
          }
        }
      ]
    }
  }
]

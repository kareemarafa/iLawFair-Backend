import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactAComponent } from './components/contact-a/contact-a.component'
import {genericFields} from "../generic-fields";
import {CoreModule} from "@ionhour/core";

@NgModule({
  declarations: [ContactAComponent],
  imports: [CommonModule, CoreModule]
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
  ...genericFields,
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
      label: 'form.Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.Title Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
        templateOptions: {
      label: 'form.Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.Title Color'
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

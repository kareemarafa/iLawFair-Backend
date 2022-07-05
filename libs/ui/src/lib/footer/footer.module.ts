import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterAComponent, FooterBComponent } from './components/'
import {genericFields} from "../generic-fields";
import {CoreModule} from "@ionhour/core";

@NgModule({
  declarations: [FooterAComponent, FooterBComponent],
  imports: [CommonModule, CoreModule]
})
export class FooterModule {}

export const footerComponentData = {
  image: './assets/logo.jpeg',
  copyrightText: '2017–2021',
  sections: [
    {
      title: 'Features',
      items: [
        {
          value: 'Cool stuff',
          url: '#'
        },
        {
          value: 'Random feature',
          url: '#'
        },
        {
          value: 'Team feature',
          url: '#'
        },
        {
          value: 'Stuff for developers',
          url: '#'
        },
        {
          value: 'Another one',
          url: '#'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          value: 'Cool stuff',
          url: '#'
        },
        {
          value: 'Random feature',
          url: '#'
        },
        {
          value: 'Team feature',
          url: '#'
        },
        {
          value: 'Stuff for developers',
          url: '#'
        },
        {
          value: 'Another one',
          url: '#'
        }
      ]
    },
    {
      title: 'About',
      items: [
        {
          value: 'Cool stuff',
          url: '#'
        },
        {
          value: 'Random feature',
          url: '#'
        },
        {
          value: 'Team feature',
          url: '#'
        },
        {
          value: 'Stuff for developers',
          url: '#'
        },
        {
          value: 'Another one',
          url: '#'
        }
      ]
    }
  ]
}

export const footerFields = [
  ...genericFields,
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Title' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'image',
        type: 'gallery',
        templateOptions: {
      label: 'form.Logo',
          required: true
        }
      },
      {
        className: 'col-9',
        key: 'copyrightText',
        type: 'input',
        templateOptions: {
      label: 'form.Copyright',
          required: true
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Social media' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        type: 'input',
        key: 'facebook',
        templateOptions: {
      label: 'form.Facebook'
        }
      },
      {
        type: 'input',
        key: 'twitter',
        templateOptions: {
      label: 'form.Twitter'
        }
      },
      {
        type: 'input',
        key: 'linkedin',
        templateOptions: {
      label: 'form.LinkedIn'
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'sections',
    type: 'repeat',
    templateOptions: {
      label: 'Sections',
      addText: 'Add section'
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'input',
          key: 'title',
          templateOptions: {
            label: 'Title'
          }
        },
        {
          key: 'items',
          type: 'repeat',
          templateOptions: {
            label: 'Items',
            addText: 'Add link'
          },
          fieldArray: {
            fieldGroup: [
              {
                type: 'input',
                key: 'value',
                templateOptions: {
                  label: 'Text'
                }
              },
              {
                type: 'input',
                key: 'url',
                templateOptions: {
                  label: 'URL'
                }
              }
            ]
          }
        }
      ]
    }
  }
]

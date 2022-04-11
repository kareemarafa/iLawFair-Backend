import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterAComponent, FooterBComponent } from './components/'

@NgModule({
  declarations: [FooterAComponent, FooterBComponent],
  imports: [CommonModule]
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
          label: 'Logo',
          required: true
        }
      },
      {
        className: 'col-9',
        key: 'copyrightText',
        type: 'input',
        templateOptions: {
          label: 'Copyright',
          required: true
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

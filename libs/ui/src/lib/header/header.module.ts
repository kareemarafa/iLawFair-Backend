import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './components'

@NgModule({
  declarations: [HeaderAComponent, HeaderBComponent, HeaderCComponent],
  imports: [CommonModule]
})
export class HeaderModule {}

export const headerFields = [
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
        type: 'colorLibraryPicker',
        templateOptions: {
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
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color'
        }
      },
      {
        className: 'col-12',
        key: 'image',
        type: 'gallery',
        templateOptions: {
          label: 'Image'
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'callToAction',
    templateOptions: {
      label: 'Call to action'
    },
    fieldGroup: [
      {
        type: 'input',
        key: 'value',
        templateOptions: {
          label: 'Label'
        }
      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
          label: 'URL'
        }
      },
      {
        type: 'select',
        key: 'color',
        templateOptions: {
          type: 'select',
          label: 'Color',
          options: [
            {
              value: 'btn-outline-primary',
              label: 'Primary'
            },
            {
              value: 'btn-outline-secondary',
              label: 'Secondary'
            },
            {
              value: 'btn-outline-danger',
              label: 'Danger'
            },
            {
              value: 'btn-outline-info',
              label: 'Info'
            }
          ]
        }
      }
    ]
  }
]

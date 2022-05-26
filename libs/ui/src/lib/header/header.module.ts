import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './components'
import { CoreModule } from '@ionhour/core'

@NgModule({
  declarations: [HeaderAComponent, HeaderBComponent, HeaderCComponent],
  imports: [CommonModule, CoreModule]
})
export class HeaderModule {}

export const headerComponentData = {
  sectionHead: 'Header',
  "style": {
  "backgroundColor": "#fbfbfb",
    "backgroundImage": null,
    "paddingTop": null,
    "paddingBottom": null,
    "paddingRight": 15,
    "paddingLeft": null
},
  "sectionOptions": {
  "fullWidth": true
},
  "sectionHeadColor": "#474747",
  "descriptionColor": "#949494",
  image: './assets/500x300.png',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.",
  callToAction: {
    value: 'Learn more',
    url: '#'
  }
}

export const headerFields = [
  {
    wrappers: ['panel'],
    key: 'style',
    fieldGroupClassName: 'row',
    templateOptions: {
      label: 'Section styles'
    },
    fieldGroup: [
      {
        className: 'col-12',
        key: 'backgroundColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Background Color'
        }
      },
      {
        className: 'col-12',
        key: 'backgroundImage',
        type: 'gallery',
        templateOptions: {
          label: 'Background Image'
        }
      },
      {
        className: 'col-6',
        key: 'paddingTop',
        type: 'slider',
        templateOptions: {
          label: 'Top Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingBottom',
        type: 'slider',
        templateOptions: {
          label: 'Bottom Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingRight',
        type: 'slider',
        templateOptions: {
          label: 'Right Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingLeft',
        type: 'slider',
        templateOptions: {
          label: 'Left Spacing',
          min: 15,
          max: 200
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'sectionOptions',
    templateOptions: {
      label: 'Section options'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'fullWidth',
        templateOptions: {
          label: 'Full width'
        }
      }
    ]
  },
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

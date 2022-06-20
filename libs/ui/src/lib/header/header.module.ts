import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './components'
import { CoreModule } from '@ionhour/core'
import {genericFields} from "../generic-fields";

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
  ...genericFields,
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
      label: 'form.heading',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'sectionHeadColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'textarea',
        templateOptions: {
      label: 'form.description',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      },
      {
        className: 'col-12',
        key: 'image',
        type: 'gallery',
        templateOptions: {
      label: 'form.image'
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
      label: 'form.label'
        }
      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
      label: 'form.url'
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

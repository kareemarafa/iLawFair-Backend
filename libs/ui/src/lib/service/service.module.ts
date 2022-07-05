import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ServiceAComponent} from './components/service-a/service-a.component'
import {ServiceBComponent} from './components/service-b/service-b.component'
import {ServiceCComponent} from './components/service-c/service-c.component'
import {getPagesAsList} from "../../../../core/src/lib/utils/pages-list.util";
import {genericFields} from "../generic-fields";
import {CoreModule} from "@ionhour/core";

@NgModule({
  declarations: [ServiceAComponent, ServiceBComponent, ServiceCComponent],
  imports: [CommonModule, CoreModule]
})
export class ServiceModule {
}

export const serviceComponentData = {
  title: `Service A Title`,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
  callToAction: {
    value: 'click here',
    url: '#'
  },
  items: [
    {
      icon: `fa fa-envelope-o`,
      title: `Item Title`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
    },
    {
      icon: `fa fa-handshake-o`,
      title: `Item Title`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
    },
    {
      icon: `fa fa-film`,
      title: `Item Title`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`
    }
  ]
};
export const serviceFields = [
  ...genericFields,
  {
    wrappers: ['panel'],
    templateOptions: {label: 'Title'},
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
      label: 'form.color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
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
        type: 'select',
        key: 'navType',
        templateOptions: {
          label: 'form.navType',
          options: [
            {
              label: 'form.link',
              value: 'link'
            },
            {
              label: 'form.page',
              value: 'page'
            }
          ]
        },
      },
      {
        type: 'select',
        key: 'page',
        templateOptions: {
          label: 'form.page',
          options: getPagesAsList()
        },
        hideExpression: (model: any) => model.navType !== 'page'
      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
          label: 'form.url'
        },
        hideExpression: (model: any) => model.navType !== 'link'
      },
      {
        type: 'colorLibraryPicker',
        key: 'color',
        templateOptions: {
          label: 'form.color'
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
              value: 'btn-primary',
              label: 'Primary'
            },
            {
              value: 'btn-danger',
              label: 'Danger'
            },
            {
              value: 'btn-info',
              label: 'Info'
            }
          ]
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'items',
    type: 'repeat',
    fieldGroupClassName: 'row',
    templateOptions: {
      label: 'Service items',
      addText: 'Add item'
    },
    fieldArray: {
      fieldGroup: [
        {
          className: 'col-12',
          type: 'toggle',
          key: 'isImage',
          templateOptions: {
            label: 'Show as Image',
          }
        },
        {
          className: 'col-12',
          type: 'iconPicker',
          key: 'icon',
          templateOptions: {
            label: 'Icon',
          },
          hideExpression: (model: any) => model.isImage
        },
        {
          className: 'col-12',
          type: 'gallery',
          key: 'image',
          templateOptions: {
            label: 'Image',
          },
          hideExpression: (model: any) => !model.isImage
        },
        {
          type: 'input',
          key: 'title',
          templateOptions: {
            label: 'Label'
          }
        },
        {
          type: 'input',
          key: 'description',
          templateOptions: {
            label: 'description'
          }
        }
      ]
    }
  }
]

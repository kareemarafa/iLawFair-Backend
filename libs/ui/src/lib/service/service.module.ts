import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ServiceAComponent} from './components/service-a/service-a.component'
import {ServiceBComponent} from './components/service-b/service-b.component'
import {ServiceCComponent} from './components/service-c/service-c.component'

@NgModule({
  declarations: [ServiceAComponent, ServiceBComponent, ServiceCComponent],
  imports: [CommonModule]
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
          label: 'Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
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
          type: 'iconPicker',
          key: 'icon',
          templateOptions: {
            label: 'Icon',
          }
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

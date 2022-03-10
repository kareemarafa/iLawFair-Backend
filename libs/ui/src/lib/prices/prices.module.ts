import { NgModule } from '@angular/core'
import { PricesAComponent } from './components'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [CommonModule],
  declarations: [PricesAComponent]
})
export class PricesModule {}

export const priceComponentData = {
  title: 'Pricing',
  description:
    'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.',
  items: [
    {
      title: 'Free',
      price: '$0',
      per: 'month',
      features: [{ title: '10 admin_users included' }, { title: '2 GB of storage' }, { title: 'Email support' }, { title: 'Help center access' }],
      allToAction: {
        value: 'Sign up for free',
        url: '#',
        color: 'btn-outline-primary'
      }
    },
    {
      title: 'Pro',
      price: '$15',
      per: 'month',
      features: [{ title: '10 admin_users included' }, { title: '2 GB of storage' }, { title: 'Email support' }, { title: 'Help center access' }],
      callToAction: {
        value: 'Sign up for free',
        url: '#',
        color: 'btn-outline-primary'
      }
    },
    {
      title: 'Enterprise',
      price: '$29',
      per: 'month',
      features: [{ title: '10 admin_users included' }, { title: '2 GB of storage' }, { title: 'Email support' }, { title: 'Help center access' }],
      callToAction: {
        value: 'Sign up for free',
        url: '#',
        color: 'btn-outline-primary'
      }
    }
  ]
}

export const priceFields = [
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
    key: 'items',
    type: 'repeat',
    templateOptions: {
      label: 'Items',
      addText: 'Add item'
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
          type: 'input',
          key: 'price',
          templateOptions: {
            label: 'Price'
          }
        },
        {
          type: 'select',
          key: 'per',
          templateOptions: {
            label: 'per',
            type: 'select',
            options: [
              {
                label: 'Month',
                value: 'month'
              },
              {
                label: 'Year',
                value: 'year'
              }
            ]
          }
        },
        {
          key: 'features',
          type: 'repeat',
          templateOptions: {
            label: 'Features',
            addText: 'Add feature'
          },
          fieldArray: {
            fieldGroup: [
              {
                type: 'input',
                key: 'title',
                templateOptions: {
                  label: 'Title'
                }
              }
            ]
          }
        },
        {
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
    }
  }
]

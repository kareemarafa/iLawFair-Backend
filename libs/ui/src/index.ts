import { NavbarAComponent, NavbarBComponent, NavbarCComponent } from './lib/navbar/components'
import { ModuleInterface } from '@ionhour/interfaces'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './lib/header/components'
import { AboutAComponent } from './lib/about/components'
import { ServiceAComponent } from './lib/service/components/service-a/service-a.component'
import { ServiceBComponent } from './lib/service/components/service-b/service-b.component'
import { ServiceCComponent } from './lib/service/components/service-c/service-c.component'
import { ServiceDComponent } from './lib/service/components/service-d/service-d.component'
import { CountAComponent } from './lib/count/components/count-a/count-a.component'
import { CountBComponent } from './lib/count/components/count-b/count-b.component'
import { TeamAComponent } from './lib/team/components/team-a/team-a.component'
import { TeamBComponent } from './lib/team/components/team-b/team-b.component'
import { ActionAComponent } from './lib/action/components/action-a/action-a.component'
import { ActionBComponent } from './lib/action/components/action-b/action-b.component'
import { GalleryAComponent } from './lib/gallery/components/gallery-a/gallery-a.component'
import { ContactAComponent } from './lib/contact/components/contact-a/contact-a.component'
import { MapAComponent } from './lib/map/components'
import { TestimonialsAComponent } from './lib/testimonials/components'
import { PricesAComponent } from './lib/prices/components'
import { StatisticsAComponent } from './lib/statistics/components'
import { DividerAComponent } from './lib/divider/components'
import { FooterAComponent } from './lib/footer/components'

export * from './lib/navbar/navbar.module'
export * from './lib/header/header.module'
export * from './lib/about/about.module'
export * from './lib/service/service.module'
export * from './lib/count/count.module'
export * from './lib/team/team.module'
export * from './lib/action/action.module'
export * from './lib/gallery/gallery.module'
export * from './lib/contact/contact.module'
export * from './lib/statistics/statistics.module'
export * from './lib/prices/prices.module'
export * from './lib/testimonials/testimonials.module'
export * from './lib/divider/divider.module'

export * from './lib/navbar/components'

export const builderElements: ModuleInterface[] = [
  {
    moduleName: 'menu',
    components: [
      {
        componentName: 'NavbarAComponent',
        componentClass: NavbarAComponent,
        componentData: {
          title: 'Example',
          titleFontSize: 15,
          menuItems: [
            { value: 'Home', url: '#' },
            { value: 'About', url: '#' },
            { value: 'Career', url: '#' },
            { value: 'Contact', url: '#' }
          ],
          callToAction: {
            value: 'Call to Action',
            url: '#'
          }
        },
        fields: [
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
                className: 'col-12',
                key: 'titleFontSize',
                type: 'slider',
                templateOptions: {
                  min: 5,
                  max: 20,
                  label: 'Title font size'
                }
              }
            ]
          },
          {
            wrappers: ['panel'],
            key: 'menuItems',
            type: 'repeat',
            templateOptions: {
              label: 'Menu items',
              addText: 'Add item'
            },
            fieldArray: {
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
                }
              ]
            }
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
      },
      {
        componentName: 'NavbarBComponent',
        componentClass: NavbarBComponent,
        componentData: {
          title: 'Example',
          titleFontSize: 15,
          menuItems: [
            { value: 'Home', url: '#' },
            { value: 'About', url: '#' },
            { value: 'Career', url: '#' },
            { value: 'Contact', url: '#' }
          ],
          callToAction: {
            value: 'Call to Action',
            url: '#'
          }
        },
        fields: [
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
                className: 'col-12',
                key: 'titleFontSize',
                type: 'slider',
                templateOptions: {
                  min: 5,
                  max: 20,
                  label: 'Title font size'
                }
              }
            ]
          },
          {
            wrappers: ['panel'],
            key: 'menuItems',
            type: 'repeat',
            templateOptions: {
              label: 'Menu items',
              addText: 'Add item'
            },
            fieldArray: {
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
                }
              ]
            }
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
      },
      {
        componentName: 'NavbarCComponent',
        componentClass: NavbarCComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: 'HeaderAComponent',
        componentClass: HeaderAComponent,
        fields: []
      },
      {
        componentName: 'HeaderBComponent',
        componentClass: HeaderBComponent,
        fields: []
      },
      {
        componentName: 'HeaderCComponent',
        componentClass: HeaderCComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'about',
    components: [
      {
        componentName: 'AboutAComponent',
        componentClass: AboutAComponent,
        fields: [],

        componentData: [
          {
            image: './assets/500x300.png',
            title: {
              value: 'Lorem Ipsum',
              style: '#000'
            },
            text: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.",
              style: '#000'
            }
          },
          {
            image: './assets/500x300.png',
            title: {
              value: 'Lorem Ipsum',
              style: '#000'
            },
            text: {
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.",
              style: '#000'
            }
          }
        ]
      }
    ]
  },
  {
    moduleName: 'services',
    components: [
      {
        componentName: 'ServiceAComponent',
        componentClass: ServiceAComponent,
        fields: [],

        componentData: [
          {
            title: {
              value: `Service A Title`,
              style: '#000'
            },
            text: {
              value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
              style: '#000'
            },
            btn: `Click Here`,
            items: [
              {
                icon: `fa-handshake-o`,
                title: {
                  value: `Item Title`,
                  style: '#000'
                },
                text: {
                  value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
                  style: '#ff0'
                }
              },
              {
                icon: `fa-handshake-o`,
                title: {
                  value: `Item Title`,
                  style: '#000'
                },
                text: {
                  value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
                  style: '#ff0'
                }
              },
              {
                icon: `fa-handshake-o`,
                title: {
                  value: `Item Title`,
                  style: '#ff0'
                },
                text: {
                  value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
                  style: '#ff0'
                }
              }
            ]
          }
        ]
      },
      {
        componentName: 'ServiceBComponent',
        componentClass: ServiceBComponent,
        fields: []
      },
      {
        componentName: 'ServiceCComponent',
        componentClass: ServiceCComponent,
        fields: []
      },
      {
        componentName: 'ServiceDComponent',
        componentClass: ServiceDComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'action',
    components: [
      {
        componentName: 'ActionAComponent',
        componentClass: ActionAComponent,
        fields: []
      },
      {
        componentName: 'ActionBComponent',
        componentClass: ActionBComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'statistics',
    components: [
      {
        componentName: 'StatisticsAComponent',
        componentClass: StatisticsAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'countdown',
    components: [
      {
        componentName: 'CountAComponent',
        componentClass: CountAComponent,
        fields: []
      },
      {
        componentName: 'CountBComponent',
        componentClass: CountBComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'team',
    components: [
      {
        componentName: 'TeamAComponent',
        componentClass: TeamAComponent,
        fields: []
      },
      {
        componentName: 'TeamBComponent',
        componentClass: TeamBComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'price',
    components: [
      {
        componentName: 'PricesAComponent',
        componentClass: PricesAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'testimonial',
    components: [
      {
        componentName: 'TestimonialsAComponent',
        componentClass: TestimonialsAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'gallery',
    components: [
      {
        componentName: 'GalleryAComponent',
        componentClass: GalleryAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'form',
    components: [
      {
        componentName: 'ContactAComponent',
        componentClass: ContactAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'map',
    components: [
      {
        componentName: 'MapAComponent',
        componentClass: MapAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'divider',
    components: [
      {
        componentName: 'DividerAComponent',
        componentClass: DividerAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'footer',
    components: [
      {
        componentName: 'FooterAComponent',
        componentClass: FooterAComponent,
        fields: []
      }
    ]
  }
]

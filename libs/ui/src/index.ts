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
        componentData: [
          {
            // image?:
            title: { value: 'Test' }
            // text?:
            // btn?:
            // items?:
            // icon?:
          }
        ],
        model: {},
        fields: [
          {
            key: 'title',
            type: 'input',
            templateOptions: {
              label: 'Title',
              description: 'Your company name',
              required: true
            }
          }
        ]
      },
      {
        componentName: 'NavbarBComponent',
        componentClass: NavbarBComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'NavbarCComponent',
        componentClass: NavbarCComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: 'HeaderAComponent',
        componentClass: HeaderAComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'HeaderBComponent',
        componentClass: HeaderBComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'HeaderCComponent',
        componentClass: HeaderCComponent,
        fields: [],
        model: {}
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
        model: {},
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
        model: {},
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
        fields: [],
        model: {}
      },
      {
        componentName: 'ServiceCComponent',
        componentClass: ServiceCComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'ServiceDComponent',
        componentClass: ServiceDComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'action',
    components: [
      {
        componentName: 'ActionAComponent',
        componentClass: ActionAComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'ActionBComponent',
        componentClass: ActionBComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'statistics',
    components: [
      {
        componentName: 'StatisticsAComponent',
        componentClass: StatisticsAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'countdown',
    components: [
      {
        componentName: 'CountAComponent',
        componentClass: CountAComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'CountBComponent',
        componentClass: CountBComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'team',
    components: [
      {
        componentName: 'TeamAComponent',
        componentClass: TeamAComponent,
        fields: [],
        model: {}
      },
      {
        componentName: 'TeamBComponent',
        componentClass: TeamBComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'price',
    components: [
      {
        componentName: 'PricesAComponent',
        componentClass: PricesAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'testimonial',
    components: [
      {
        componentName: 'TestimonialsAComponent',
        componentClass: TestimonialsAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'gallery',
    components: [
      {
        componentName: 'GalleryAComponent',
        componentClass: GalleryAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'form',
    components: [
      {
        componentName: 'ContactAComponent',
        componentClass: ContactAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'map',
    components: [
      {
        componentName: 'MapAComponent',
        componentClass: MapAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'divider',
    components: [
      {
        componentName: 'DividerAComponent',
        componentClass: DividerAComponent,
        fields: [],
        model: {}
      }
    ]
  },
  {
    moduleName: 'footer',
    components: [
      {
        componentName: 'FooterAComponent',
        componentClass: FooterAComponent,
        fields: [],
        model: {}
      }
    ]
  }
]

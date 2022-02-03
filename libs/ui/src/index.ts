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

export * from './lib/navbar/navbar.module'
export * from './lib/header/header.module'
export * from './lib/about/about.module'
export * from './lib/service/service.module'
export * from './lib/count/count.module'
export * from './lib/navbar/components'

export const builderElements: ModuleInterface[] = [
  {
    moduleName: 'menu',
    components: [
      {
        componentName: NavbarAComponent.name,
        componentClass: NavbarAComponent
      },
      {
        componentName: NavbarBComponent.name,
        componentClass: NavbarBComponent
      },
      {
        componentName: NavbarCComponent.name,
        componentClass: NavbarCComponent
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: HeaderAComponent.name,
        componentClass: HeaderAComponent
      },
      {
        componentName: HeaderBComponent.name,
        componentClass: HeaderBComponent
      },
      {
        componentName: HeaderCComponent.name,
        componentClass: HeaderCComponent
      }
    ]
  },
  {
    moduleName: 'about',
    components: [
      {
        componentName: AboutAComponent.name,
        componentClass: AboutAComponent
      }
    ]
  },
  {
    moduleName: 'services',
    components: [
      {
        componentName: ServiceAComponent.name,
        componentClass: ServiceAComponent
      },
      {
        componentName: ServiceBComponent.name,
        componentClass: ServiceBComponent
      },
      {
        componentName: ServiceCComponent.name,
        componentClass: ServiceCComponent
      },
      {
        componentName: ServiceDComponent.name,
        componentClass: ServiceDComponent
      }
    ]
  },
  {
    moduleName: 'action',
    components: []
  },
  {
    moduleName: 'calendar',
    components: []
  },
  {
    moduleName: 'countdown',
    components: [
      {
        componentName: CountAComponent.name,
        componentClass: CountAComponent
      },
      {
        componentName: CountBComponent.name,
        componentClass: CountBComponent
      }
    ]
  },
  {
    moduleName: 'team',
    components: []
  },
  {
    moduleName: 'price',
    components: []
  },
  {
    moduleName: 'testimonial',
    components: []
  },
  {
    moduleName: 'gallery',
    components: []
  },
  {
    moduleName: 'form',
    components: []
  },
  {
    moduleName: 'map',
    components: []
  },
  {
    moduleName: 'divider',
    components: []
  },
  {
    moduleName: 'footer',
    components: []
  }
]

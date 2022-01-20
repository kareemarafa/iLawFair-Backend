import { NavbarAComponent, NavbarBComponent, NavbarCComponent } from './lib/navbar/components'
import { ModuleInterface } from '@ionhour/interfaces'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './lib/header/components'
import { AboutAComponent } from './lib/about/components'

export * from './lib/navbar/navbar.module'
export * from './lib/header/header.module'
export * from './lib/about/about.module'
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
    components: []
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
    components: []
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

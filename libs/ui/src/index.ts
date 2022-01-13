import { NavbarAComponent, NavbarBComponent } from './lib/navbar/components'
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
        componentName: `NavbarAComponent`,
        componentObject: NavbarAComponent
      },
      {
        componentName: `NavbarBComponent`,
        componentObject: NavbarBComponent
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: `HeaderAComponent`,
        componentObject: HeaderAComponent
      },
      {
        componentName: `HeaderBComponent`,
        componentObject: HeaderBComponent
      },
      {
        componentName: `HeaderCComponent`,
        componentObject: HeaderCComponent
      }
    ]
  },
  {
    moduleName: 'about',
    components: [
      {
        componentName: `AboutAComponent`,
        componentObject: AboutAComponent
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

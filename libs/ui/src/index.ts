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
import { MapAComponent } from './lib/map/components'
import { TestimonialsAComponent } from './lib/testimonials/components'
import { PricesAComponent } from './lib/prices/components'
import { StatisticsAComponent } from './lib/statistics/components'

export * from './lib/navbar/navbar.module'
export * from './lib/header/header.module'
export * from './lib/about/about.module'
export * from './lib/service/service.module'
export * from './lib/count/count.module'
export * from './lib/team/team.module'
export * from './lib/action/action.module'
export * from './lib/gallery/gallery.module'
export * from './lib/statistics/statistics.module'

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
    components: [
      {
        componentName: ActionAComponent.name,
        componentClass: ActionAComponent
      },
      {
        componentName: ActionBComponent.name,
        componentClass: ActionBComponent
      }
    ]
  },
  {
    moduleName: 'statistics',
    components: [
      {
        componentName: StatisticsAComponent.name,
        componentClass: StatisticsAComponent
      }
    ]
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
    components: [
      {
        componentName: TeamAComponent.name,
        componentClass: TeamAComponent
      },
      {
        componentName: TeamBComponent.name,
        componentClass: TeamBComponent
      }
    ]
  },
  {
    moduleName: 'price',
    components: [
      {
        componentName: PricesAComponent.name,
        componentClass: PricesAComponent
      }
    ]
  },
  {
    moduleName: 'testimonial',
    components: [
      {
        componentName: TestimonialsAComponent.name,
        componentClass: TestimonialsAComponent
      }
    ]
  },
  {
    moduleName: 'gallery',
    components: [
      {
        componentName: GalleryAComponent.name,
        componentClass: GalleryAComponent
      }
    ]
  },
  {
    moduleName: 'form',
    components: []
  },
  {
    moduleName: 'map',
    components: [
      {
        componentName: MapAComponent.name,
        componentClass: MapAComponent
      }
    ]
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

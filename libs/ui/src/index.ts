import { NavbarAComponent, NavbarBComponent } from './lib/navbar/components';
import { ModuleInterface } from '@ionhour/interfaces';

export * from './lib/navbar/navbar.module';
export * from './lib/navbar/components';

export const builderElements: ModuleInterface[] = [
  {
    moduleName: 'menu',
    components: [
      {
        componentName: `NavbarAComponent`,
        componentObject: NavbarAComponent,
      },
      {
        componentName: `NavbarBComponent`,
        componentObject: NavbarBComponent,
      },
    ],
  },
  {
    moduleName: 'header',
    components: [],
  },
  {
    moduleName: 'about',
    components: [],
  },
  {
    moduleName: 'services',
    components: [],
  },
  {
    moduleName: 'action',
    components: [],
  },
  {
    moduleName: 'calendar',
    components: [],
  },
  {
    moduleName: 'countdown',
    components: [],
  },
  {
    moduleName: 'team',
    components: [],
  },
  {
    moduleName: 'price',
    components: [],
  },
  {
    moduleName: 'testimonial',
    components: [],
  },
  {
    moduleName: 'gallery',
    components: [],
  },
  {
    moduleName: 'form',
    components: [],
  },
  {
    moduleName: 'map',
    components: [],
  },
  {
    moduleName: 'divider',
    components: [],
  },
  {
    moduleName: 'footer',
    components: [],
  },
];

import { NavbarBComponent } from './lib/navbar/components';

export * from './lib/navbar/navbar.module';
export * from './lib/navbar/components';

export const modules = [
  {
    moduleName: 'menu',
    components: [
      {
        componentName: `NavbarBComponent`,
        component: NavbarBComponent,
      },
    ],
  },
];

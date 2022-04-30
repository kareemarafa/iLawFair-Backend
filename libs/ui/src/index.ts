import { NavbarAComponent, NavbarBComponent, NavbarCComponent } from './lib/navbar/components'
import { ModuleInterface } from '@ionhour/interfaces'
import { HeaderAComponent, HeaderBComponent, HeaderCComponent } from './lib/header/components'
import { AboutAComponent, AboutBComponent } from './lib/about/components'
import { ServiceAComponent } from './lib/service/components/service-a/service-a.component'
import { ServiceBComponent } from './lib/service/components/service-b/service-b.component'
import { ServiceCComponent } from './lib/service/components/service-c/service-c.component'
import { CountAComponent } from './lib/count/components/count-a/count-a.component'
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
import { FooterAComponent, FooterBComponent } from './lib/footer/components'
import { headerComponentData, headerFields } from './lib/header/header.module'
import { actionFields } from './lib/action/action.module'
import { priceComponentData, priceFields } from './lib/prices/prices.module'
import { testimonialComponentData, testimonialFields } from './lib/testimonials/testimonials.module'
import { footerComponentData, footerFields } from './lib/footer/footer.module'
import { contactComponentData, contactFields } from './lib/contact/contact.module'
import { galleryComponentData, galleryFields } from './lib/gallery/gallery.module'
import { countComponentData, countFields } from './lib/count/count.module'
import { aboutComponentData, aboutFields } from './lib/about/about.module'
import { teamComponentData, teamFields } from './lib/team/team.module'
import { navbarComponentData, navbarFields } from './lib/navbar/navbar.module'
import { SocialAComponent } from './lib/social-media/components/social-a/social-a.component'
import {serviceComponentData, serviceFields} from "./lib/service/service.module";
import {mapsComponentData, mapsFields} from "./lib/map/map.module";
import {BlogAComponent} from "./lib/blog/components/blog-a/blog-a.component";
import {blogComponentData, blogFields} from "./lib/blog/blog.module";

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
export * from './lib/social-media/social-media.module'

export * from './lib/navbar/components'

export const builderElements: ModuleInterface[] = [
  {
    moduleName: 'menu',
    components: [
      {
        componentName: 'NavbarAComponent',
        componentClass: NavbarAComponent,
        componentData: navbarComponentData,
        fields: navbarFields
      },
      {
        componentName: 'NavbarBComponent',
        componentClass: NavbarBComponent,
        componentData: navbarComponentData,
        fields: navbarFields
      },
      {
        componentName: 'NavbarCComponent',
        componentClass: NavbarCComponent,
        componentData: navbarComponentData,
        fields: navbarFields
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: 'HeaderAComponent',
        componentClass: HeaderAComponent,
        componentData: headerComponentData,
        fields: headerFields
      },
      {
        componentName: 'HeaderBComponent',
        componentClass: HeaderBComponent,
        componentData: headerComponentData,
        fields: headerFields
      },
      {
        componentName: 'HeaderCComponent',
        componentClass: HeaderCComponent,
        componentData: headerComponentData,
        fields: [
          ...headerFields,
          {
            wrappers: ['panel'],
            key: 'video',
            templateOptions: {
              label: 'Video'
            },
            fieldGroup: [
              {
                className: 'col-12',
                key: 'poster',
                type: 'gallery',
                templateOptions: {
                  label: 'Poster'
                }
              },
              {
                className: 'col-12',
                key: 'url',
                type: 'gallery',
                templateOptions: {
                  type: 'input',
                  label: 'Video',
                  placeholder: 'Enter URL here'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    moduleName: 'about',
    components: [
      {
        componentName: 'AboutAComponent',
        componentClass: AboutAComponent,
        componentData: aboutComponentData,
        fields: aboutFields
      },
      {
        componentName: 'AboutBComponent',
        componentClass: AboutBComponent,
        componentData: aboutComponentData,
        fields: aboutFields
      }
    ]
  },
  {
    moduleName: 'services',
    components: [
      {
        componentName: 'ServiceAComponent',
        componentClass: ServiceAComponent,
        componentData: serviceComponentData,
        fields: serviceFields
      },
      {
        componentName: 'ServiceBComponent',
        componentClass: ServiceBComponent,
        componentData: serviceComponentData,
        fields: serviceFields
      },
      {
        componentName: 'ServiceCComponent',
        componentClass: ServiceCComponent,
        componentData: serviceComponentData,
        fields: serviceFields
      },
    ]
  },
  {
    moduleName: 'action',
    components: [
      {
        componentName: 'ActionAComponent',
        componentClass: ActionAComponent,
        componentData: {
          sectionHead: 'Action title',
          description: 'Test',
          callToAction: {
            value: 'Action',
            url: '#'
          }
        },
        fields: actionFields
      },
      {
        componentName: 'ActionBComponent',
        componentClass: ActionBComponent,
        componentData: {
          sectionHead: 'Action title',
          description: 'Test',
          callToAction: {
            value: 'Action',
            url: '#'
          },
          image: 'https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg'
        },
        fields: [
          ...actionFields,
          {
            wrappers: ['panel'],
            templateOptions: { label: 'Image' },
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-12',
                key: 'image',
                type: 'gallery',
                templateOptions: {
                  type: 'input',
                  label: 'Image',
                  placeholder: 'Enter URL here'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    moduleName: 'social',
    components: [
      {
        componentName: 'SocialAComponent',
        componentClass: SocialAComponent,
        componentData: {
          title: 'Follow Us',
          description: 'none',
          facebook: '#',
          twitter: '#',
          instagram: '#'
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
                type: 'colorLibraryPicker',
                templateOptions: {
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
                type: 'colorLibraryPicker',
                templateOptions: {
                  label: 'Title Color'
                }
              },
              {
                className: 'col-9',
                key: 'facebook',
                type: 'input',
                templateOptions: {
                  label: 'Title',
                  required: true
                }
              },
              {
                className: 'col-9',
                key: 'twitter',
                type: 'input',
                templateOptions: {
                  label: 'Title',
                  required: true
                }
              },
              {
                className: 'col-9',
                key: 'instagram',
                type: 'input',
                templateOptions: {
                  label: 'Title',
                  required: true
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    moduleName: 'statistics',
    components: [
      {
        componentName: 'StatisticsAComponent',
        componentClass: StatisticsAComponent,
        componentData: {
          title: 'Statistics',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          items: [
            {
              title: 'Stars',
              value: '10'
            },
            {
              title: 'Projects',
              value: '50'
            },
            {
              title: 'Clients',
              value: '100+'
            }
          ]
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
                type: 'colorLibraryPicker',
                templateOptions: {
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
                type: 'colorLibraryPicker',
                templateOptions: {
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
                  key: 'value',
                  templateOptions: {
                    label: 'Value'
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    moduleName: 'countdown',
    components: [
      {
        componentName: 'CountAComponent',
        componentClass: CountAComponent,
        componentData: countComponentData,
        fields: countFields
      }
    ]
  },
  {
    moduleName: 'team',
    components: [
      {
        componentName: 'TeamAComponent',
        componentClass: TeamAComponent,
        componentData: teamComponentData,
        fields: teamFields
      },
      {
        componentName: 'TeamBComponent',
        componentClass: TeamBComponent,
        componentData: teamComponentData,
        fields: teamFields
      }
    ]
  },
  {
    moduleName: 'price',
    components: [
      {
        componentName: 'PricesAComponent',
        componentClass: PricesAComponent,
        componentData: priceComponentData,
        fields: priceFields
      }
    ]
  },
  {
    moduleName: 'testimonial',
    components: [
      {
        componentName: 'TestimonialsAComponent',
        componentClass: TestimonialsAComponent,
        componentData: testimonialComponentData,
        fields: testimonialFields
      }
    ]
  },
  {
    moduleName: 'gallery',
    components: [
      {
        componentName: 'GalleryAComponent',
        componentClass: GalleryAComponent,
        componentData: galleryComponentData,
        fields: galleryFields
      }
    ]
  },
  {
    moduleName: 'form',
    components: [
      {
        componentName: 'ContactAComponent',
        componentClass: ContactAComponent,
        componentData: contactComponentData,
        fields: contactFields
      }
    ]
  },
  {
    moduleName: 'map',
    components: [
      {
        componentName: 'MapAComponent',
        componentClass: MapAComponent,
        componentData: mapsComponentData,
        fields: mapsFields
      }
    ]
  },
  {
    moduleName: 'spacing',
    components: [
      {
        componentName: 'DividerAComponent',
        componentClass: DividerAComponent,
        fields: []
      }
    ]
  },
  {
    moduleName: 'blog',
    components: [
      {
        componentName: 'BlogAComponent',
        componentClass: BlogAComponent,
        componentData: blogComponentData,
        fields: blogFields
      },
    ]
  },
  {
    moduleName: 'footer',
    components: [
      {
        componentName: 'FooterAComponent',
        componentClass: FooterAComponent,
        componentData: footerComponentData,
        fields: footerFields
      },
      {
        componentName: 'FooterBComponent',
        componentClass: FooterBComponent,
        componentData: footerComponentData,
        fields: footerFields
      }
    ]
  }
]

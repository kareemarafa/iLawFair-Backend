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
import { headerFields } from './lib/header/header.module'
import { actionFields } from './lib/action/action.module'
import { priceComponentData, priceFields } from './lib/prices/prices.module'
import { testimonialComponentData, testimonialFields } from './lib/testimonials/testimonials.module'
import { footerComponentData, footerFields } from './lib/footer/footer.module'

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
          }
        ]
      }
    ]
  },
  {
    moduleName: 'header',
    components: [
      {
        componentName: 'HeaderAComponent',
        componentClass: HeaderAComponent,
        componentData: {
          sectionHead: 'About',
          image: './assets/500x300.png',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        fields: headerFields
      },
      {
        componentName: 'HeaderBComponent',
        componentClass: HeaderBComponent,
        componentData: {
          sectionHead: 'About',
          image: './assets/500x300.png',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.",
          callToAction: {
            value: 'Learn more',
            url: '#'
          }
        },
        fields: headerFields
      },
      {
        componentName: 'HeaderCComponent',
        componentClass: HeaderCComponent,
        componentData: {
          sectionHead: 'About',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.",
          video: {
            poster: 'https://assets.codepen.io/6093409/river.jpg',
            url: 'https://assets.codepen.io/6093409/river.mp4'
          }
        },
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
                type: 'input',
                templateOptions: {
                  type: 'input',
                  label: 'Poster',
                  placeholder: 'Enter URL here'
                }
              },
              {
                className: 'col-12',
                key: 'url',
                type: 'input',
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
        componentData: {
          sectionHead: 'About',
          title: 'Lorem Ipsum',
          image: './assets/500x300.png',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        fields: [
          {
            wrappers: ['panel'],
            templateOptions: { label: 'Title' },
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-9',
                key: 'sectionHead',
                type: 'input',
                templateOptions: {
                  label: 'Heading',
                  required: true
                }
              },
              {
                className: 'col-3',
                key: 'sectionHeadColor',
                type: 'input',
                templateOptions: {
                  type: 'color',
                  label: 'Color'
                }
              },
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
                  label: 'Color'
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
              },
              {
                className: 'col-9',
                key: 'description',
                type: 'textarea',
                templateOptions: {
                  label: 'Description',
                  required: true
                }
              },
              {
                className: 'col-3',
                key: 'descriptionColor',
                type: 'input',
                templateOptions: {
                  type: 'color',
                  label: 'Color'
                }
              },
              {
                className: 'col-12',
                key: 'descriptionFontSize',
                type: 'slider',
                templateOptions: {
                  min: 5,
                  max: 20,
                  label: 'Description font size'
                }
              }
            ]
          },
          {
            wrappers: ['panel'],
            templateOptions: { label: 'Image/Video' },
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-12',
                key: 'image',
                type: 'input',
                templateOptions: {
                  type: 'input',
                  label: 'Image',
                  placeholder: 'Enter URL here',
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
                type: 'input',
                templateOptions: {
                  type: 'input',
                  label: 'Image',
                  placeholder: 'Enter URL here',
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
        componentData: {
          title: 'Teams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          items: [
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              role: `Front-end developer`
            },
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              role: `Front-end developer`
            },
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              role: `Front-end developer`
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
                  key: 'name',
                  templateOptions: {
                    label: 'Name'
                  }
                },
                {
                  type: 'input',
                  key: 'role',
                  templateOptions: {
                    label: 'Role'
                  }
                },
                {
                  type: 'input',
                  key: 'image',
                  templateOptions: {
                    label: 'Image'
                  }
                }
              ]
            }
          }
        ]
      },
      {
        componentName: 'TeamBComponent',
        componentClass: TeamBComponent,
        componentData: {
          title: 'Teams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          items: [
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`,
              role: `Front-end developer`
            },
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`,
              role: `Front-end developer`
            },
            {
              image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
              name: `Sam`,
              details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis`,
              role: `Front-end developer`
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
                  key: 'name',
                  templateOptions: {
                    label: 'Name'
                  }
                },
                {
                  type: 'input',
                  key: 'role',
                  templateOptions: {
                    label: 'Role'
                  }
                },
                {
                  type: 'input',
                  key: 'details',
                  templateOptions: {
                    label: 'Details'
                  }
                },
                {
                  type: 'input',
                  key: 'image',
                  templateOptions: {
                    label: 'Image'
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
        componentData: footerComponentData,
        fields: footerFields
      }
    ]
  }
]

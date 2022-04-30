import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAComponent } from './components/blog-a/blog-a.component';
import {CoreModule} from "@ionhour/core";



@NgModule({
  declarations: [
    BlogAComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class BlogModule { }

export const blogComponentData = {
  title: 'Blog',
  description: 'This is a blog description',
  posts: [
    {
      title: 'What is Lorem Ipsum?',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      callToAction: {
        href: '#',
        text: 'Learn more'
      }
    },
    {
      title: 'Why do we use it?',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      callToAction: {
        href: '#',
        text: 'Learn more'
      }
    },
    {
      title: 'Where does it come from?',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      callToAction: {
        href: '#',
        text: 'Learn more'
      }
    }
  ]
}

export const blogFields = [
  {
    wrappers: ['panel'],
    key: 'style',
    fieldGroupClassName: 'row',
    templateOptions: {
      label: 'Section styles'
    },
    fieldGroup: [
      {
        className: 'col-12',
        key: 'backgroundColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Background Color'
        }
      },
      {
        className: 'col-12',
        key: 'backgroundImage',
        type: 'gallery',
        templateOptions: {
          label: 'Background Image'
        }
      },
      {
        className: 'col-6',
        key: 'paddingTop',
        type: 'slider',
        templateOptions: {
          label: 'Top Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingBottom',
        type: 'slider',
        templateOptions: {
          label: 'Bottom Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingRight',
        type: 'slider',
        templateOptions: {
          label: 'Right Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingLeft',
        type: 'slider',
        templateOptions: {
          label: 'Left Spacing',
          min: 15,
          max: 200
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    key: 'sectionOptions',
    templateOptions: {
      label: 'Section options'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'fullWidth',
        templateOptions: {
          label: 'Full width'
        }
      }
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Section details' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title'
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description'
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color'
        }
      },
    ]
  },
  {
    wrappers: ['panel'],
    key: 'posts',
    type: 'repeat',
    templateOptions: {
      label: 'Posts',
      addText: 'Add post'
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'gallery',
          key: 'image',
          templateOptions: {
            label: 'Image',
            required: true
          }
        },
        {
          type: 'input',
          key: 'title',
          templateOptions: {
            label: 'Title',
            required: true
          }
        },
        {
          type: 'input',
          key: 'description',
          templateOptions: {
            type: 'textarea',
            label: 'Description',
            required: true
          }
        },
        {
          key: 'callToAction',
          templateOptions: {
            label: 'Button Text',
          },
          fieldGroup: [
            {
              key: 'text',
              type: 'input',
              templateOptions: {
                label: "Text",
              }
            },
            {
              key: 'href',
              type: 'input',
              templateOptions: {
                label: "Href",
              }
            }
          ]
        },
      ]
    }
  }
]

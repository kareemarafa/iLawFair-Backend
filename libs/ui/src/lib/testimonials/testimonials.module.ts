import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TestimonialsAComponent } from './components'

@NgModule({
  declarations: [TestimonialsAComponent],
  imports: [CommonModule]
})
export class TestimonialsModule {}

export const testimonialComponentData = {
  title: 'Testimonials',
  description:
    'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.',
  items: [
    {
      title: 'CEO',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: './assets/500x300.png',
      name: 'Mohamed Hassan',
      company: 'Dot Us'
    },
    {
      title: 'CEO',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: './assets/500x300.png',
      name: 'Mohamed Hassan',
      company: 'Dot Us'
    },
    {
      title: 'CEO',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      image: './assets/500x300.png',
      name: 'Mohamed Hassan',
      company: 'Dot Us'
    }
  ]
}

export const testimonialFields = [
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Heading' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'title',
        type: 'input',
        templateOptions: {
      label: 'form.Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.Title Color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
        templateOptions: {
      label: 'form.Title',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.Title Color'
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
          key: 'description',
          templateOptions: {
            label: 'Description'
          }
        },
        {
          type: 'gallery',
          key: 'image',
          templateOptions: {
            label: 'Image'
          }
        },
        {
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name'
          }
        },
        {
          type: 'input',
          key: 'company',
          templateOptions: {
            label: 'Company'
          }
        }
      ]
    }
  }
]

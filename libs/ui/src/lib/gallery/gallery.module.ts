import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GalleryAComponent } from './components/gallery-a/gallery-a.component'

@NgModule({
  declarations: [GalleryAComponent],
  imports: [CommonModule]
})
export class GalleryModule {}

export const galleryComponentData = {
  title: `Section Title`,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
  items: [
    {
      image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
      title: `Item Title`
    },
    {
      image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
      title: `Item Title`
    },
    {
      image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
      title: `Item Title`
    }
  ]
}

export const galleryFields = [
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
          key: 'image',
          templateOptions: {
            label: 'Image URL'
          }
        }
      ]
    }
  }
]

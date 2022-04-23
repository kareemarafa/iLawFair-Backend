import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutAComponent, AboutBComponent } from './components'
import { FormlyFieldConfig } from '@ngx-formly/core'

@NgModule({
  declarations: [AboutAComponent, AboutBComponent],
  imports: [CommonModule]
})
export class AboutModule {}

export const aboutComponentData = {
  sectionHead: 'About',
  title: 'Lorem Ipsum',
  image: './assets/500x300.png',
  isVideo: false,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
}
export const aboutFields: FormlyFieldConfig[] = [
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
        type: 'colorLibraryPicker',
        templateOptions: {
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
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color'
        }
      },
      {
        className: 'col-12',
        key: 'titleFontSize',
        type: 'slider',
        templateOptions: {
          min: 10,
          max: 40,
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
        type: 'colorLibraryPicker',
        templateOptions: {
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
      },
      {
        className: 'col-6',
        key: 'titleColumnSize',
        type: 'slider',
        templateOptions: {
          min: 3,
          max: 9,
          label: 'Title column size'
        }
      },
      {
        className: 'col-6',
        key: 'descriptionColumnSize',
        type: 'slider',
        templateOptions: {
          min: 3,
          max: 9,
          label: 'Description column size'
        }
      },
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Media' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-12',
        key: 'isVideo',
        type: 'toggle',
        templateOptions: {
          label: 'Check if media type is video'
        }
      },
      {
        className: 'col-12',
        key: 'image',
        type: 'gallery',
        templateOptions: {
          label: 'Image'
        }
      },
      {
        className: 'col-12',
        key: 'video',
        type: 'gallery',
        hideExpression: (model) => !model['isVideo'],
        templateOptions: {
          label: 'Video'
        }
      }
    ]
  }
]

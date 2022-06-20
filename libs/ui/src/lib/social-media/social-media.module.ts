import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SocialAComponent } from './components/social-a/social-a.component'
import {getPagesAsList} from "../../../../core/src/lib/utils/pages-list.util";

@NgModule({
  imports: [CommonModule],
  declarations: [SocialAComponent]
})
export class SocialMediaModule {}
export const socialComponentData = {
  title: 'Follow Us',
  description: 'none',
  facebook: '#',
  twitter: '#',
  instagram: '#'
}
export const socialFields = [
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
    ]
  },
  {
    wrappers: ['panel'],
    key: 'socialLinks',
    type: 'repeat',
    templateOptions: {
      label: 'form.socialLinks',
      addText: 'addItem'
    },
    fieldArray: {
      fieldGroup: [
        {
          type: 'input',
          key: 'label',
          templateOptions: {
            label: 'form.label'
          }
        },
        {
          type: 'input',
          key: 'url',
          templateOptions: {
            label: 'form.url'
          }
        },
        {
          type: 'iconPicker',
          key: 'icon',
          templateOptions: {
            label: 'form.icon'
          }
        },
      ],
    }
  },
]

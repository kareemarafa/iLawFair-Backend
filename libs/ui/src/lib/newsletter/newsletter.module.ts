import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterAComponent } from './components/newsletter-a/newsletter-a.component';
import {CoreModule} from "@ionhour/core";
import {genericFields} from "../generic-fields";



@NgModule({
  declarations: [
    NewsletterAComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class NewsletterModule { }

export const newsletterComponentData = {
  title: 'Newsletter',
  description: 'This is a newsletter description',
}

export const newsletterFields = [
  ...genericFields,
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
      label: 'form.Background Color'
        }
      },
      {
        className: 'col-12',
        key: 'backgroundImage',
        type: 'gallery',
        templateOptions: {
      label: 'form.Background Image'
        }
      },
      {
        className: 'col-6',
        key: 'paddingTop',
        type: 'slider',
        templateOptions: {
      label: 'form.Top Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingBottom',
        type: 'slider',
        templateOptions: {
      label: 'form.Bottom Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingRight',
        type: 'slider',
        templateOptions: {
      label: 'form.Right Spacing',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingLeft',
        type: 'slider',
        templateOptions: {
      label: 'form.Left Spacing',
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
      label: 'form.Full width'
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
      label: 'form.Title'
        }
      },
      {
        className: 'col-3',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'input',
        templateOptions: {
      label: 'form.description'
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      },
    ]
  },
]

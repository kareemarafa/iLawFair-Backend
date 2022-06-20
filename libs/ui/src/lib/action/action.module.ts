import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActionAComponent } from './components/action-a/action-a.component'
import { ActionBComponent } from './components/action-b/action-b.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import {getPagesAsList} from "../../../../core/src/lib/utils/pages-list.util";

@NgModule({
  declarations: [ActionAComponent, ActionBComponent],
  imports: [CommonModule, HttpClientModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule]
})
export class ActionModule {}

export const actionFields = [
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Edit Content' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-9',
        key: 'sectionHead',
        type: 'input',
        templateOptions: {
      label: 'form.heading',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'sectionHeadColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      },
      {
        className: 'col-9',
        key: 'description',
        type: 'textarea',
        templateOptions: {
      label: 'form.description',
          required: true
        }
      },
      {
        className: 'col-3',
        key: 'descriptionColor',
        type: 'colorLibraryPicker',
        templateOptions: {
      label: 'form.color'
        }
      }
    ]
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
      label: 'form.label'
        }
      },
      {
        type: 'select',
        key: 'navType',
        templateOptions: {
          label: 'form.navType',
          options: [
            {
              label: 'form.link',
              value: 'link'
            },
            {
              label: 'form.page',
              value: 'page'
            }
          ]
        },
      },
      {
        type: 'select',
        key: 'page',
        templateOptions: {
          label: 'form.page',
          options: getPagesAsList()
        },
        hideExpression: (model: any) => model.navType !== 'page'
      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
          label: 'form.url'
        },
        hideExpression: (model: any) => model.navType !== 'link'
      },
      {
        type: 'colorLibraryPicker',
        key: 'color',
        templateOptions: {
          label: 'form.color'
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
              value: 'btn-outline-secondary',
              label: 'Secondary'
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

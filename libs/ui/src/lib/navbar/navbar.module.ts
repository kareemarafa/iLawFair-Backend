import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarAComponent, NavbarBComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NavbarCComponent } from './components'

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent, NavbarCComponent],
  imports: [CommonModule, DragDropModule, MatButtonModule, MatIconModule],
  exports: [NavbarAComponent]
})
export class NavbarModule {}

export const navbarComponentData = {
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
  },
  logo: {
    logoEnabled: false
  }
}

export const navbarFields = [
  {
    wrappers: ['panel'],
    templateOptions: { label: 'Title' },
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-12',
        key: 'baseUrl',
        type: 'input',
        templateOptions: {
          type: 'input',
          required: true,
          label: 'Base URL'
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
          label: 'Title Color'
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
      }
    ]
  },

  {
    wrappers: ['panel'],
    key: 'logo',
    fieldGroupClassName: 'row',
    templateOptions: {
      label: 'Logo options'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'logoEnabled',
        templateOptions: {
          label: 'Enabled logo image'
        }
      },
      {
        type: 'gallery',
        key: 'src',
        className: 'col-12',
        templateOptions: {
          label: 'Logo',
          type: 'input'
        },
        hideExpression: (model: any) => !model.logoEnabled
      },
      {
        className: 'col-6',
        key: 'width',
        type: 'input',
        templateOptions: {
          min: 50,
          max: 250,
          type: 'number',
          label: 'Logo width'
        },
        hideExpression: (model: any) => !model.logoEnabled
      },
      {
        className: 'col-6',
        key: 'height',
        type: 'input',
        templateOptions: {
          min: 50,
          max: 250,
          type: 'number',
          label: 'Logo height'
        },
        hideExpression: (model: any) => !model.logoEnabled
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

import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavbarAComponent, NavbarBComponent} from './components'
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {NavbarCComponent} from './components'
import {CoreModule} from '@ionhour/core'
import {NgxTippyModule, NgxTippyService} from 'ngx-tippy-wrapper';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent, NavbarCComponent],
  imports: [CommonModule, DragDropModule, MatButtonModule, MatIconModule, CoreModule, NgxTippyModule, MatButtonToggleModule, MatTooltipModule],
  exports: [NavbarAComponent],
  providers: [NgxTippyService]
})
export class NavbarModule {
}

export const navbarComponentData = {
  title: 'Example',
  titleFontSize: 15,
  menuItems: [
    {value: 'Home', url: '#'},
    {value: 'About', url: '#'},
    {value: 'Career', url: '#'},
    {value: 'Contact', url: '#'}
  ],
  callToAction: {
    value: 'Call to Action',
    url: '#'
  },
  logo: {
    logoEnabled: false
  },
  style: {
    backgroundColor: '#FFFFFF'
  },
  sectionOptions: {
    fullWidth: false
  }
}

export const navbarFields = [
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
      },
      {
        type: 'select',
        key: 'appearance',
        templateOptions: {
          label: 'Appearance',
          options: [
            {
              label: 'Normal',
              value: 'normal'
            },
            {
              label: 'Sticky',
              value: 'sticky'
            }
          ]
        }
      },
      {
        className: 'col-12',
        type: 'toggle',
        key: 'menuItemsEnabled',
        templateOptions: {
          label: 'Show menu items'
        }
      },
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: {label: 'Title'},
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
        className: 'col-12',
        type: 'toggle',
        key: 'titleEnabled',
        templateOptions: {
          label: 'Show title'
        }
      },
      {
        className: 'col-7',
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title',
          required: true,
        },
        hideExpression: (model: any) => !model.titleEnabled
      },
      {
        className: 'col-5',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'Color',
        },
        hideExpression: (model: any) => !model.titleEnabled
      },
      {
        className: 'col-12',
        key: 'titleFontSize',
        type: 'slider',
        templateOptions: {
          min: 10,
          max: 40,
          label: 'Title font size',
        },
        hideExpression: (model: any) => !model.titleEnabled
      },
      {
        className: 'col-12',
        type: 'toggle',
        key: 'sloganEnabled',
        templateOptions: {
          label: 'Show slogan'
        }
      },
      {
        className: 'col-12',
        key: 'slogan',
        type: 'input',
        templateOptions: {
          label: 'Slogan',
        },
        hideExpression: (model: any) => !model.sloganEnabled
      },
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
        type: 'slider',
        templateOptions: {
          min: 25,
          max: 250,
          type: 'number',
          label: 'Logo width'
        },
        hideExpression: (model: any) => !model.logoEnabled
      },
      {
        className: 'col-6',
        key: 'height',
        type: 'slider',
        templateOptions: {
          min: 25,
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
        },
        {
          type: 'colorLibraryPicker',
          key: 'color',
          templateOptions: {
            label: 'Color'
          }
        }
      ],
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

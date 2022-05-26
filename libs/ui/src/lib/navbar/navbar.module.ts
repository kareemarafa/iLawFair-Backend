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

export const navbarAData = {
  "style": {
    "backgroundColor": "#FFFFFF",
    "backgroundImage": null,
    "paddingTop": 17,
    "paddingBottom": 17,
    "paddingRight": 15,
    "paddingLeft": null
  },
  "sectionOptions": {
    "fullWidth": false,
    "appearance": "normal",
    "logoPosition": "left",
    "menuItemsEnabled": true
  },
  "callToAction": {
    "isEnabled": true,
    "value": "Call to Action",
    "url": "#",
    "color": null
  },
  "baseUrl": "/home",
  "titleEnabled": true,
  "sloganEnabled": true,
  "logo": {
    "logoEnabled": false
  },
  "menuItems": [
    {
      "value": "Home",
      "url": "#",
      "color": null
    },
    {
      "value": "About",
      "url": "#",
      "color": null
    },
    {
      "value": "Career",
      "url": "#",
      "color": null
    },
    {
      "value": "Contact",
      "url": "#",
      "color": null
    }
  ],
  "title": "Example",
  "titleColor": "#256efd",
  "titleFontSize": 19,
  "slogan": "Hi buddy, I'm slogan :)"
}

export const navbarBData = {
  "style": {
    "backgroundColor": "#6e2121",
    "backgroundImage": null,
    "paddingTop": null,
    "paddingBottom": null,
    "paddingRight": null,
    "paddingLeft": null
  },
  "sectionOptions": {
    "fullWidth": false,
    "appearance": "normal",
    "logoPosition": "right",
    "menuItemsEnabled": true
  },
  "callToAction": {
    "isEnabled": true,
    "value": "Call to Action",
    "url": "#",
    "color": "btn-outline-danger"
  },
  "baseUrl": "/home",
  "titleEnabled": true,
  "sloganEnabled": false,
  "logo": {
    "logoEnabled": false
  },
  "menuItems": [
    {
      "value": "Home",
      "url": "#",
      "color": null
    },
    {
      "value": "About",
      "url": "#",
      "color": null
    },
    {
      "value": "Career",
      "url": "#",
      "color": null
    },
    {
      "value": "Contact",
      "url": "#",
      "color": null
    }
  ],
  "title": "Example",
  "titleColor": "#ffb0b0",
  "titleFontSize": 20
}

export const navbarCData = {
  "style": {
    "backgroundColor": "#353535",
    "backgroundImage": null,
    "paddingTop": 20,
    "paddingBottom": 17,
    "paddingRight": null,
    "paddingLeft": 15
  },
  "sectionOptions": {
    "fullWidth": false,
    "appearance": null,
    "logoPosition": "center",
    "menuItemsEnabled": true
  },
  "callToAction": {
    "isEnabled": true,
    "value": "Call to Action",
    "url": "#",
    "color": "btn-outline-info"
  },
  "baseUrl": "/home",
  "titleEnabled": true,
  "sloganEnabled": false,
  "logo": {
    "logoEnabled": false
  },
  "menuItems": [
    {
      "value": "Home",
      "url": "#",
      "color": "#ffffff"
    },
    {
      "value": "About",
      "url": "#",
      "color": "#ffffff"
    },
    {
      "value": "Career",
      "url": "#",
      "color": "#ffffff"
    },
    {
      "value": "Contact",
      "url": "#",
      "color": "#ffffff"
    }
  ],
  "title": "Example",
  "titleColor": "#eeeeee",
  "titleFontSize": 20
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
        type: 'select',
        key: 'logoPosition',
        templateOptions: {
          label: 'Logo position',
          options: [
            {
              label: 'Left',
              value: 'left'
            },
            {
              label: 'Center',
              value: 'center'
            },
            {
              label: 'Right',
              value: 'right'
            },
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
    key: 'callToAction',
    templateOptions: {
      label: 'Call to action'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'isEnabled',
        templateOptions: {
          label: 'Show CTA button'
        }
      },
      {
        type: 'input',
        key: 'value',
        templateOptions: {
          label: 'Label'
        },
        hideExpression: (model: any) => !model.isEnabled

      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
          label: 'URL'
        },
        hideExpression: (model: any) => !model.isEnabled
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
        },
        hideExpression: (model: any) => !model.isEnabled
      }
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
]

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
import {genericFields} from "../generic-fields";
import {getPagesAsList} from "../../../../core/src/lib/utils/pages-list.util";

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
  ...genericFields,
  {
    wrappers: ['panel'],
    key: 'callToAction',
    templateOptions: {
      label: 'form.callToAction'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'isEnabled',
        templateOptions: {
          label: 'form.showCTAButton'
        }
      },
      {
        type: 'input',
        key: 'value',
        templateOptions: {
          label: 'form.label'
        },
        hideExpression: (model: any) => !model.isEnabled

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
        hideExpression: (model: any) => !model.isEnabled
      },
      {
        type: 'select',
        key: 'page',
        templateOptions: {
          label: 'form.page',
          options: getPagesAsList()
        },
        hideExpression: (model: any) => !model.isEnabled || model.navType !== 'page'
      },
      {
        type: 'input',
        key: 'url',
        templateOptions: {
          label: 'form.url'
        },
        hideExpression: (model: any) => !model.isEnabled || model.navType !== 'link'
      },
      {
        type: 'select',
        key: 'color',
        templateOptions: {
          type: 'select',
          label: 'form.color',
          options: [
            {
              value: 'btn-outline-primary',
              label: 'form.Primary'
            },
            {
              value: 'btn-outline-danger',
              label: 'form.Danger'
            },
            {
              value: 'btn-outline-info',
              label: 'form.Info'
            }
          ]
        },
        hideExpression: (model: any) => !model.isEnabled
      }
    ]
  },
  {
    wrappers: ['panel'],
    templateOptions: {label: 'form.title'},
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-12',
        key: 'baseUrl',
        type: 'input',
        templateOptions: {
          type: 'input',
          required: true,
          label: 'form.baseUrl'
        }
      },
      {
        className: 'col-12',
        type: 'toggle',
        key: 'titleEnabled',
        templateOptions: {
          label: 'form.showTitle'
        }
      },
      {
        className: 'col-7',
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'form.title',
          required: true,
        },
        hideExpression: (model: any) => !model.titleEnabled
      },
      {
        className: 'col-5',
        key: 'titleColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'form.color',
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
          label: 'form.titleFontSize',
        },
        hideExpression: (model: any) => !model.titleEnabled
      },
      {
        className: 'col-12',
        type: 'toggle',
        key: 'sloganEnabled',
        templateOptions: {
          label: 'form.showSlogan'
        }
      },
      {
        className: 'col-12',
        key: 'slogan',
        type: 'input',
        templateOptions: {
          label: 'form.slogan',
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
      label: 'form.logoOptions'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'logoEnabled',
        templateOptions: {
          label: 'form.showLogoImage'
        }
      },
      {
        type: 'gallery',
        key: 'src',
        className: 'col-12',
        templateOptions: {
          label: 'form.logo',
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
          label: 'form.logoWidth'
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
          label: 'form.logoHeight'
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
      label: 'form.menuItems',
      addText: 'addItem'
    },
    fieldArray: {
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
        }
      ],
    }
  },
]

export const genericFields = [
  {
    wrappers: ['panel'],
    key: 'style',
    fieldGroupClassName: 'row',
    templateOptions: {
      label: 'form.sectionStyle'
    },
    fieldGroup: [
      {
        className: 'col-12',
        key: 'backgroundColor',
        type: 'colorLibraryPicker',
        templateOptions: {
          label: 'form.backgroundColor'
        }
      },
      {
        className: 'col-12',
        key: 'backgroundImage',
        type: 'gallery',
        templateOptions: {
          label: 'form.backgroundImage'
        }
      },
      {
        className: 'col-6',
        key: 'paddingTop',
        type: 'slider',
        templateOptions: {
          label: 'form.paddingTop',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingBottom',
        type: 'slider',
        templateOptions: {
          label: 'form.paddingBottom',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingRight',
        type: 'slider',
        templateOptions: {
          label: 'form.paddingRight',
          min: 15,
          max: 200
        }
      },
      {
        className: 'col-6',
        key: 'paddingLeft',
        type: 'slider',
        templateOptions: {
          label: 'form.paddingLeft',
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
      label: 'form.sectionOptions'
    },
    fieldGroup: [
      {
        type: 'toggle',
        key: 'fullWidth',
        templateOptions: {
          label: 'form.fullWidth'
        }
      }
    ]
  },
]

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamAComponent } from './components/team-a/team-a.component'
import { TeamBComponent } from './components/team-b/team-b.component'

@NgModule({
  declarations: [TeamAComponent, TeamBComponent],
  imports: [CommonModule]
})
export class TeamModule {}
export const teamComponentData = {
  title: 'Teams',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  items: [
    {
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
      name: `Sam`,
      role: `Front-end developer`
    },
    {
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
      name: `Sam`,
      role: `Front-end developer`
    },
    {
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSAGirBVOXf-ziW-ui6PE-7tTUeRqwUND4Q&usqp=CAU`,
      name: `Sam`,
      role: `Front-end developer`
    }
  ]
}
export const teamFields = [
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
          key: 'name',
          templateOptions: {
            label: 'Name'
          }
        },
        {
          type: 'input',
          key: 'role',
          templateOptions: {
            label: 'Role'
          }
        },
        {
          type: 'gallery',
          key: 'image',
          templateOptions: {
            label: 'Image'
          }
        },
        {
          type: 'input',
          key: 'facebook',
          templateOptions: {
            label: 'Facebook'
          }
        },
        {
          type: 'input',
          key: 'twitter',
          templateOptions: {
            label: 'Twitter'
          }
        },
        {
          type: 'input',
          key: 'linkedin',
          templateOptions: {
            label: 'LinkedIn'
          }
        }
      ]
    }
  }
]

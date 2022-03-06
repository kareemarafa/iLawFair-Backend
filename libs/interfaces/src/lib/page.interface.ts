import { Project } from './project.interface'
import { IComponent } from './component.interface'

export interface PageInterface {
  id: number
  pageName: string
  components: IComponent[]
  project: Project
}

import { PageInterface } from './page.interface'

export interface Project {
  id?: number
  projectName: string
  themeColor?: string
  themeFont?: string
  logo?: string
  favicon?: string
  background?: string
  pages: PageInterface[]
  scripts?: string
  styles?: string
}

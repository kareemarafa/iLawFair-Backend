import { PageInterface } from './page.interface'
import {BuilderType} from "@ionhour/interfaces";

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
  builderType: BuilderType
}

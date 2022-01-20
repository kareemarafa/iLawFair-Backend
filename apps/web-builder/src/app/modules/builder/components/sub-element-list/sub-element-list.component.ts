import { Component, Input } from '@angular/core'
import { ElementsService } from '@ionhour/core'
import { builderElements } from '@ionhour/ui'
import { IComponent, ModuleInterface } from '@ionhour/interfaces'

@Component({
  selector: 'ionhour-sub-element-list',
  templateUrl: './sub-element-list.component.html',
  styleUrls: ['./sub-element-list.component.scss']
})
export class SubElementListComponent {
  subComponents!: IComponent[]
  @Input() show!: boolean

  constructor(public elementService: ElementsService) {
    const items = elementService.currentElement$
    items.subscribe((key) => (this.subComponents = key ? this.getSubComponents(key) : []))
  }

  getSubComponents(key: string): IComponent[] {
    const { components } = builderElements.filter((item: ModuleInterface) => item.moduleName === key)[0]
    return components
  }

  pushComponent(componentClass: any): void {
    this.elementService.pushToPreview(componentClass)
  }
}

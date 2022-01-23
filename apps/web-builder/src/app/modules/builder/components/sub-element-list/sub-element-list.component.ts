import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core'
import { ElementsService } from '@ionhour/core'
import { builderElements } from '@ionhour/ui'
import { IComponent, ModuleInterface } from '@ionhour/interfaces'
import { map } from 'rxjs'
import { WrapperComponent } from './wrapper/wrapper.component'

@Component({
  selector: 'ionhour-sub-element-list',
  templateUrl: './sub-element-list.component.html',
  styleUrls: ['./sub-element-list.component.scss']
})
export class SubElementListComponent implements AfterViewInit, OnChanges {
  subComponents!: IComponent[]
  @Input() moduleName!: string | null

  @ViewChild('container', { read: ViewContainerRef }) container?: ViewContainerRef

  constructor(public elementService: ElementsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    Promise.resolve().then((e) => {
      if (this.moduleName) this.getSubComponents(this.moduleName)
    })
  }

  ngAfterViewInit() {
    Promise.resolve().then((e) => {
      if (this.moduleName) this.getSubComponents(this.moduleName)
    })
  }

  getSubComponents(moduleName: string) {
    const { components } = builderElements.filter((item: ModuleInterface) => item.moduleName === moduleName)[0]
    this.viewComponent(components)
  }

  viewComponent(components: IComponent[]) {
    // Reset containerRef & componentsRef
    this.container?.clear()

    for (const component of components) {
      this.createComponent(component.componentClass)
    }
  }

  // createComponent(component: any): void {
  //   this.container?.createComponent(component)
  // }

  createComponent(component: any): void {
    const componentRef: any = this.container?.createComponent(WrapperComponent)
    console.log(componentRef)
    if (componentRef) {
      componentRef.instance.component = component
    }
  }
}

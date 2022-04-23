import { Component, OnInit } from '@angular/core'
import { builderElements } from '@ionhour/ui'
import { ElementsService } from '@ionhour/core'
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { IComponent } from '@ionhour/interfaces'

@UntilDestroy()
@Component({
  selector: 'ionhour-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {
  builderElements = builderElements
  activeModule!: Record<string, boolean>

  constructor(private elementService: ElementsService) {}

  setCurrentElement(element: MatSlideToggleChange): void {
    const name = element?.source?.name ?? ''
    const status = element?.checked
    if (status) {
      this.elementService.setCurrentElement(name)
    } else {
      this.elementService.setCurrentElement(null)
      // Get indexes of module's nested items
      // Delete them
        const moduleComponents = builderElements.filter(e => e.moduleName === name)[0]
        moduleComponents.components.forEach(com => {
          const index = this.elementService.components.indexOf(com, 0);
          if (index > -1) {
            this.elementService.delete(index)
          }
        })
    }
  }

  ngOnInit() {
    this.elementService.components$.pipe(untilDestroyed(this)).subscribe((currentComponents) => {
      for (const key in this.activeModule) {
        this.activeModule[key] = false
      }
      currentComponents.forEach((currentComponent: IComponent) => {
        const existingItems = builderElements.filter((e) => e.components.filter((ec) => ec.componentName === currentComponent.componentName).length)
        if (existingItems.length) {
          this.activeModule = { ...this.activeModule, [existingItems[0].moduleName]: true }
        }
      })
    })
  }
}

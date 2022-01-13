import { Component, OnInit } from '@angular/core'
import { builderElements } from '@ionhour/ui'
import { ElementsService } from '../../services'
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle'
import { ModuleInterface } from '@ionhour/interfaces'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'ionhour-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {
  builderElements = builderElements
  activeModule!: string

  constructor(private elementService: ElementsService) {}

  setCurrentElement(element: MatSlideToggleChange): void {
    const name = element?.source?.name ?? ''
    const status = element?.checked
    if (status) {
      this.elementService.setCurrentElement(name)
    }
  }

  ngOnInit() {
    this.elementService.currentElement$.pipe(untilDestroyed(this)).subscribe((module) => (this.activeModule = module))
  }

  getCheckStatus(element: ModuleInterface): boolean {
    return this.activeModule === element.moduleName
  }
}

import { Component, OnInit } from '@angular/core'
import { builderElements } from '@ionhour/ui'
import { ElementsService } from '../../services'
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle'
import { ModuleInterface } from '@ionhour/interfaces'
import { lastValueFrom } from 'rxjs'

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
    this.elementService.currentElement$.subscribe((module) => (this.activeModule = module))
  }

  getCheckStatus(element: ModuleInterface): boolean {
    return this.activeModule === element.moduleName
  }
}

import { Component, Input } from '@angular/core'
import { ElementsService } from '@ionhour/core'

@Component({
  selector: 'ionhour-component-control',
  templateUrl: './component-control.component.html',
  styleUrls: ['./component-control.component.scss']
})
export class ComponentControlComponent {
  @Input()
  componentName?: any

  showOptions!: boolean

  constructor(private elementsService: ElementsService) {}

  mouseEnterHandler(event: boolean) {
    this.showOptions = event
  }

  delete() {
    console.log(this.componentName)
    console.log('remove')
    this.elementsService.delete(this.componentName)
  }
}

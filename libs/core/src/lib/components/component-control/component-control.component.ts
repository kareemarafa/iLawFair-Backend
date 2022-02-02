import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ElementsService } from '@ionhour/core'

@Component({
  selector: 'ionhour-component-control',
  templateUrl: './component-control.component.html',
  styleUrls: ['./component-control.component.scss']
})
export class ComponentControlComponent implements AfterViewInit {
  @Input()
  componentIndex!: number

  @Input()
  component?: any

  showOptions!: boolean

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  constructor(private elementsService: ElementsService) {}

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.container.createComponent(this.component)
    })
  }

  mouseEnterHandler(event: boolean) {
    this.showOptions = event
  }

  delete() {
    this.elementsService.delete(this.componentIndex)
  }
}

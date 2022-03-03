import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ElementsService } from '@ionhour/core'
import { IComponent } from '@ionhour/interfaces'

@Component({
  selector: 'ionhour-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements AfterViewInit {
  @Input()
  component!: IComponent

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  constructor(public elementService: ElementsService) {}

  ngAfterViewInit(): void {
    Promise.resolve().then((e) => {
      const componentRef: any = this.container.createComponent(this.component?.componentClass)
      componentRef.instance.componentData = this.component.componentData
    })
  }

  pushComponent(componentClass: any): void {
    this.elementService.pushToPreview(componentClass)
  }
}

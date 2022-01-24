import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ElementsService } from '@ionhour/core'

@Component({
  selector: 'ionhour-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements AfterViewInit {
  @Input()
  component?: any

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  constructor(public elementService: ElementsService) {}

  ngAfterViewInit(): void {
    Promise.resolve().then((e) => this.container.createComponent(this.component))
  }

  pushComponent(componentClass: any): void {
    this.elementService.pushToPreview(componentClass)
  }
}

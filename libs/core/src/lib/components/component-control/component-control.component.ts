import { Component } from '@angular/core'

@Component({
  selector: 'ionhour-component-control',
  templateUrl: './component-control.component.html',
  styleUrls: ['./component-control.component.scss']
})
export class ComponentControlComponent {
  showOptions!: boolean

  mouseEnterHandler(event: boolean) {
    this.showOptions = event
  }
}

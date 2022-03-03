import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { IComponent } from '@ionhour/interfaces'
import { ElementsService } from '../../services'

@Component({
  selector: 'ionhour-component-option',
  templateUrl: './component-option.component.html',
  styleUrls: ['./component-option.component.scss']
})
export class ComponentOptionComponent implements OnInit {
  component?: IComponent

  constructor(private elementsService: ElementsService) {}

  ngOnInit(): void {
    this.getComponent()
  }

  getComponent() {
    this.elementsService.component$.subscribe((component: IComponent) => {
      this.component = component
    })
  }

  update(form: NgForm) {
    console.log(form.value)
  }
}

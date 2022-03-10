import { AfterViewInit, Component, OnDestroy } from '@angular/core'
import { IComponent } from '@ionhour/interfaces'
import { ElementsService } from '../../services'
import { FormGroup } from '@angular/forms'
import { FormlyFormOptions } from '@ngx-formly/core'
import { takeWhile } from 'rxjs'

@Component({
  selector: 'ionhour-component-dynamic-form',
  templateUrl: './component-dynamic-form.component.html',
  styleUrls: ['./component-dynamic-form.component.scss']
})
export class ComponentDynamicFormComponent implements AfterViewInit, OnDestroy {
  component!: IComponent
  form = new FormGroup({})
  options: FormlyFormOptions = {}
  alive = true
  model = {}

  constructor(private elementsService: ElementsService) {}

  ngAfterViewInit(): void {
    this.getComponent()

    this.form.valueChanges.pipe(takeWhile(() => this.alive)).subscribe((form) => {
      this.elementsService.setContent({ componentName: this.component.componentName, componentData: form })
    })
  }

  getComponent() {
    this.elementsService.component$.pipe(takeWhile(() => this.alive)).subscribe((component: any) => {
      console.log(component.componentData)
      this.component = component
      this.model = component?.componentData
    })
  }

  ngOnDestroy() {
    this.alive = false
  }
}

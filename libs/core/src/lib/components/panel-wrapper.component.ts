import { Component } from '@angular/core'
import { FieldWrapper } from '@ngx-formly/core'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card mt-3" style="max-width: 300px">
      <h3 class="card-header">{{ to.label }}</h3>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {}

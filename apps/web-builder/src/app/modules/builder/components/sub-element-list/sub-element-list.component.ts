import { Component } from '@angular/core';
import { ElementsService } from '../../services';
import { builderElements } from '@ionhour/ui';
import { ComponentInterface, ModuleInterface } from '@ionhour/interfaces';

@Component({
  selector: 'ionhour-sub-element-list',
  templateUrl: './sub-element-list.component.html',
  styleUrls: ['./sub-element-list.component.scss'],
})
export class SubElementListComponent {
  subComponents!: ComponentInterface[];

  constructor(public elementService: ElementsService) {
    const items = elementService.currentElement$;
    items.subscribe((key) => (this.subComponents = this.getSubComponents(key)));
  }

  getSubComponents(key: string): ComponentInterface[] {
    const { components } = builderElements.filter(
      (item: ModuleInterface) => item.moduleName === key
    )[0];
    return components;
  }

  pushComponent(componentClass: any): void {
    this.elementService.pushToPreview(componentClass);
  }
}

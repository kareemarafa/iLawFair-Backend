import { Component } from '@angular/core';
import { builderElements } from '@ionhour/ui';
import { ElementsService } from '../../services';
import { MatSlideToggleChange } from '@angular/material/slide-toggle/slide-toggle';

@Component({
  selector: 'ionhour-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
})
export class ElementListComponent {
  builderElements = builderElements;

  constructor(private elementService: ElementsService) {}

  setCurrentElement(element: MatSlideToggleChange): void {
    const name = element?.source?.name ?? '';
    const status = element?.checked;
    if (status) {
      this.elementService.setCurrentElement(name);
    }
  }
}

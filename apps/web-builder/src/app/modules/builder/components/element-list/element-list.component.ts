import { Component } from '@angular/core';
import { builderElements } from '@ionhour/ui';

@Component({
  selector: 'ionhour-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
})
export class ElementListComponent {
  builderElements = builderElements;
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  previewElements$: Subject<any[]> = new Subject<any[]>();
  currentElement$: Subject<string> = new Subject<string>();

  setCurrentElement(element: string) {
    this.currentElement$.next(element);
  }

  pushToPreview(elementClass: any) {
    this.previewElements$.next(elementClass);
  }
}

import { ComponentRef, Injectable } from '@angular/core'
import { IComponent } from '@ionhour/interfaces'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  components: IComponent[] = []

  previewElements$: Subject<any[]> = new Subject<any[]>()
  currentElement$: Subject<string | null> = new Subject<string | null>()
  components$: Subject<any[]> = new Subject<Array<any>>()

  setCurrentElement(element: string | null) {
    this.currentElement$.next(element)
  }

  pushToPreview(elementClass: any) {
    this.previewElements$.next(elementClass)
    this.currentElement$.next(null)
  }

  add(components: IComponent[]) {
    this.components = [...components]
    this.components$.next(this.components)
  }

  delete(index: number) {
    this.components.splice(index, 1)
    this.components$.next(this.components)
  }
}

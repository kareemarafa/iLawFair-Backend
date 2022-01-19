import { ComponentRef, Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ComponentItem } from '../model'

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  components: ComponentItem[] = []

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

  add(component?: any) {
    this.components.push({ componentClass: component, componentName: component.name })
    this.components$.next(this.components)
  }

  delete(componentName?: any) {
    console.log(componentName)
    this.components = this.components.filter((component) => component.componentName != componentName)
    this.components$.next(this.components)
  }
}

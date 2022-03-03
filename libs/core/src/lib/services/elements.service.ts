import { ComponentRef, Injectable } from '@angular/core'
import { IComponent } from '@ionhour/interfaces'
import { Subject } from 'rxjs'
import { MatSidenav } from '@angular/material/sidenav'

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  components: IComponent[] = []

  previewElements$: Subject<any[]> = new Subject<any[]>()
  currentElement$: Subject<string | null> = new Subject<string | null>()
  components$: Subject<any[]> = new Subject<Array<any>>()
  component$: Subject<IComponent> = new Subject<IComponent>()

  private sidenav!: MatSidenav

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav
  }

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

  componentOption(index: number) {
    this.sidenav.toggle()
    const component = this.components[index]
    this.component$.next(component)
  }
}

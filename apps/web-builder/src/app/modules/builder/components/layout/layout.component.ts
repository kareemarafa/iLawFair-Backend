import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ComponentItem } from '../../../../model'
import { ElementsService } from '../../services'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'ionhour-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  components: ComponentItem[] = []
  componentsRef: ComponentRef<any>[] = []

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private breakpointObserver: BreakpointObserver, private elementsService: ElementsService) {
    const preview = elementsService.previewElements$
    preview.subscribe((component) => this.add(component))
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  add(component: any) {
    this.container.clear()
    this.componentsRef = []
    this.components.push({ componentClass: component })
    for (const component of this.components) {
      this.createComponent(component.componentClass)
    }
  }

  createComponent(component: any): void {
    const componentRef = this.container.createComponent(component)
    this.componentsRef.push(componentRef)
  }

  drop(event: CdkDragDrop<any>) {
    this.container.move(this.componentsRef[event.previousIndex].hostView, event.currentIndex)
    moveItemInArray(this.componentsRef, event.previousIndex, event.currentIndex)
  }
}

import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ElementsService } from '@ionhour/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { IComponent } from '@ionhour/interfaces'
import { ComponentControlComponent } from 'libs/core/src/lib/components'

@UntilDestroy()
@Component({
  selector: 'ionhour-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  components: IComponent[] = []
  componentsRef: ComponentRef<any>[] = []
  moduleName!: string | null

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  constructor(private breakpointObserver: BreakpointObserver, private elementsService: ElementsService) {
    const preview = elementsService.previewElements$
    const current = elementsService.currentElement$
    preview.pipe(untilDestroyed(this)).subscribe((component) => this.add(component))
    current.pipe(untilDestroyed(this)).subscribe((moduleName) => (this.moduleName = moduleName))
  }

  ngOnInit(): void {
    this.getComponents()
  }

  getComponents() {
    this.elementsService.components$.pipe(untilDestroyed(this)).subscribe((components: IComponent[]) => {
      this.components = components
      this.viewComponent()
    })
  }

  add(component?: any) {
    this.components.push({ componentClass: component, componentName: component.name })
    this.elementsService.add(this.components)
    this.viewComponent()
  }

  viewComponent() {
    // Reset containerRef & componentsRef
    this.container.clear()
    this.componentsRef = []

    for (const [index, component] of this.components.entries()) {
      this.createComponent(component.componentClass, index)
    }
  }

  createComponent(component: any, index: number): void {
    const componentRef: any = this.container.createComponent(ComponentControlComponent)
    componentRef.instance.componentIndex = index
    componentRef.instance.component = component
    this.componentsRef.push(componentRef)
  }

  drop(event: CdkDragDrop<any>) {
    this.container.move(this.componentsRef[event.previousIndex].hostView, event.currentIndex)
    moveItemInArray(this.componentsRef, event.previousIndex, event.currentIndex)
    moveItemInArray(this.components, event.previousIndex, event.currentIndex)
    this.elementsService.add(this.components)
  }
}

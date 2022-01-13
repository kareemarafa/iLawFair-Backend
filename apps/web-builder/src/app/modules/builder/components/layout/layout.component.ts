import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ComponentItem, ElementsService } from '@ionhour/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'ionhour-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  components: ComponentItem[] = []
  componentsRef: ComponentRef<any>[] = []

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  constructor(private breakpointObserver: BreakpointObserver, private elementsService: ElementsService) {
    const preview = elementsService.previewElements$
    preview.pipe(untilDestroyed(this)).subscribe((component) => this.add(component))
  }

  ngOnInit(): void {
    this.getComponents()
  }

  getComponents() {
    this.elementsService.components$.pipe(untilDestroyed(this)).subscribe((components: any) => {
      console.log(components)
      this.components = components
      this.viewComponent()
    })
  }

  add(component?: any) {
    this.elementsService.add(component)
    this.viewComponent()
  }

  viewComponent() {
    // Reset contanierRef & componentsRef
    this.container.clear()
    this.componentsRef = []

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

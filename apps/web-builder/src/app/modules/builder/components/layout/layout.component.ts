import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ElementsService } from '@ionhour/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { IComponent, PageInterface, Project } from '@ionhour/interfaces'
import { ComponentControlComponent } from 'libs/core/src/lib/components'
import { MatSidenav } from '@angular/material/sidenav'
import { ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { PageFormDialogComponent } from '../page-form-dialog/page-form-dialog.component'
import { ProjectsService } from '../../../projects/projects.service'
import { PagesService } from '../../../pages/pages.service'

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
  @ViewChild('sidenavComponentOption', { read: MatSidenav }) sidenavComponentOption!: MatSidenav

  itemId!: number
  item$!: Observable<Project>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private elementsService: ElementsService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private projectService: ProjectsService,
    private pageService: PagesService
  ) {
    const preview = elementsService.previewElements$
    const current = elementsService.currentElement$
    preview.pipe(untilDestroyed(this)).subscribe((component: any) => this.add(component))
    current.pipe(untilDestroyed(this)).subscribe((moduleName) => (this.moduleName = moduleName))
    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      if (queryParams['projectId']) {
        this.itemId = queryParams['projectId']
        this.item$ = projectService.getOne(this.itemId)
      }
    })
  }

  navigateToPageForm(item?: PageInterface) {
    const dialogRef = this.dialog.open(PageFormDialogComponent, {
      width: '500px',
      height: '500px',
      data: { projectId: this.itemId, item }
    })
    dialogRef?.afterClosed().subscribe(() => {
      this.item$ = this.projectService.getOne(this.itemId)
    })
  }

  updatePageContent() {
    console.log(this.components)
    // this.pageService.update(this.itemId, this.components)
  }

  ngOnInit(): void {
    this.getComponents()
    Promise.resolve().then((e) => this.elementsService.setSidenav(this.sidenavComponentOption))
  }

  getComponents() {
    this.elementsService.components$.pipe(untilDestroyed(this)).subscribe((components: IComponent[]) => {
      this.components = components
      this.viewComponent()
    })
  }

  add(component: IComponent) {
    this.components.push(component)
    this.elementsService.add(this.components)
    this.viewComponent()
  }

  viewComponent() {
    // Reset containerRef & componentsRef
    this.container.clear()
    this.componentsRef = []

    for (const [index, component] of this.components.entries()) {
      this.createComponent(component, index)
    }
  }

  createComponent(component: any, index: number): void {
    const componentRef: any = this.container.createComponent(ComponentControlComponent)
    componentRef.instance.componentIndex = index
    componentRef.instance.component = component.componentClass
    componentRef.instance.componentData = component.componentData

    this.componentsRef.push(componentRef)
  }

  drop(event: CdkDragDrop<any>) {
    this.container.move(this.componentsRef[event.previousIndex].hostView, event.currentIndex)
    moveItemInArray(this.componentsRef, event.previousIndex, event.currentIndex)
    moveItemInArray(this.components, event.previousIndex, event.currentIndex)
    this.elementsService.add(this.components)
  }

  componentOption(section: any) {
    section.toggle()
  }
}

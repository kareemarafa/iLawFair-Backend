import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { lastValueFrom, Observable, takeWhile } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { ElementsService } from '@ionhour/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { IComponent, PageInterface, Project } from '@ionhour/interfaces'
import { ComponentControlComponent } from '@ionhour/core'
import { MatSidenav } from '@angular/material/sidenav'
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { PageFormDialogComponent } from '../page-form-dialog/page-form-dialog.component'
import { ProjectsService } from '../../../projects/projects.service'
import { PagesService } from '../../../pages/pages.service'
import { builderElements } from '@ionhour/ui'
import { MatSnackBar } from '@angular/material/snack-bar'
import {ProjectsFormComponent} from "../../../projects/components";

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
  @ViewChild('previewElementRef', { read: ElementRef }) previewElementRef!: ElementRef

  itemId!: number
  item$!: Observable<Project>
  currentPage!: PageInterface
  initPageContent!: string
  fontName!: string

  preview = false

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
    private pageService: PagesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    const preview = elementsService.previewElements$
    const current = elementsService.currentElement$
    preview.pipe(untilDestroyed(this)).subscribe((component: any) => this.add(component))
    current.pipe(untilDestroyed(this)).subscribe((moduleName) => (this.moduleName = moduleName))
    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      if (queryParams['projectId']) {
        this.itemId = queryParams['projectId']
      }
    })
  }

  navigateToPage(page: PageInterface) {
    this.initPageContent = JSON.stringify(this.currentPage.components ?? [])
    const isChanged = this.checkIfContentChanged()
    if (isChanged) {
      if (confirm('You have unsaved content, are you sure?')) {
        this.selectPageToEditContent(page)
      } else {
        return
      }
    } else {
      this.selectPageToEditContent(page)
    }
  }

  /**
   * Select page side effect
   * @param page
   */
  selectPageToEditContent(page: PageInterface) {
    if (!page) {
      return
    }
    this.elementsService.reset()
    let allComponents: any[] = []
    builderElements.forEach((moduleWithComponents) => (allComponents = allComponents.concat(moduleWithComponents.components)))
    this.currentPage = page
    const elements: IComponent[] = []
    this.currentPage.components?.forEach((component) => {
      const element = allComponents.find((comp: IComponent) => comp.componentName === component?.componentName)
      elements.push({ ...element, ...component })
    })
    this.elementsService.add(elements)
  }

  /**
   * init project details
   * @param id
   * @param pageId
   */
  getProjectDetails(id: number, pageId?: number) {
    this.item$ = this.projectService.getOne(id)
    this.item$.pipe().subscribe((project) => {
      this.projectService.setActiveProject(project);
      this.setFont(project.themeFont ?? 'Arial')
      if (!project?.pages?.length) {
        this.showError()
        this.navigateToPageForm()
      }
      const page = project?.pages?.find((p) => p?.id === pageId)
      this.currentPage = page ?? project.pages[0]
      this.selectPageToEditContent(this.currentPage)
      if (this.currentPage) {
        this.initPageContent = JSON.stringify(this?.currentPage?.components ?? [])
      }
    })
  }

  showError() {
    this._snackBar.open("You don't have any tenant-pages, create one before start", '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    })
  }

  navigateToPageForm(item?: PageInterface) {
    const dialogRef = this.dialog.open(PageFormDialogComponent, {
      width: '500px',
      height: '500px',
      data: { projectId: this.itemId, item }
    })
    dialogRef?.afterClosed().subscribe((pageContent: PageInterface) => {
      this.item$ = this.projectService.getOne(this.itemId)
      if (pageContent) {
        this.currentPage = pageContent
      }
    })
  }

  navigateToProjectForm() {
    return this.router.navigate([`dashboard/projects/edit`], {queryParams: {id: this.itemId}})
  }

  updatePageContent() {
    const components: any[] = []
    this.components.map((component) => {
      const { componentClass, fields, ...newObj } = component
      components.push(newObj)
    })
    const pageId = +JSON.stringify(this.currentPage.id)
    return lastValueFrom(this.pageService.update(pageId, { components })).then(() => this.getProjectDetails(this.itemId, pageId))
  }

  backToDashboard() {
    const isChanged = this.checkIfContentChanged()
    if (isChanged) {
      if (confirm('You have unsaved content, are you sure?')) {
        this.router.navigate(['dashboard/tenant-projects'])
      } else {
        return
      }
    }
    return this.router.navigate(['dashboard/tenant-projects'])
  }

  checkIfContentChanged() {
    if (!this.components) {
      return
    }
    const newState = this.components.map((component) => {
      const { componentClass, fields, ...newObj }: any = component
      const ordered = Object.keys(newObj)
        .sort()
        .reduce((obj: any, key) => {
          obj[key] = newObj[key]
          return obj
        }, {})
      return ordered
    })
    const newStateString = JSON.stringify(newState)
    return this.initPageContent !== newStateString
  }

  ngOnInit(): void {
    this.getComponents()
    Promise.resolve().then((e) => {
      this.getProjectDetails(this.itemId)
      this.elementsService.setSidenav(this.sidenavComponentOption)
      this.getDynamicContent()
    })
  }

  setFont(font: string) {
    const css = `@import url('https://fonts.googleapis.com/css2?family=${font}:wght@500&display=swap')`
    const head = document.head || document.getElementsByTagName('head')[0]
    const style: any = document.createElement('style')
    head.appendChild(style)
    style.type = 'text/css'
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    const root = document.documentElement
    root.style.setProperty('--theme-font', `${font}, sans-serf`)
  }

  getComponents() {
    this.elementsService.components$.pipe(untilDestroyed(this)).subscribe((components: IComponent[]) => {
      this.components = components
      this.viewComponent()
    })
  }

  /**
   * Get component dynamic content after edit
   */
  getDynamicContent() {
    this.elementsService.contentChange$.pipe(untilDestroyed(this)).subscribe((content: any) => {
      this.components.map((component) => {
        if (content.componentName !== component.componentName) {
          return
        }
        component.componentData = content.componentData;
      })
    })
  }

  add(component: IComponent) {
    if (!this.currentPage) {
      this.showError()
      this.navigateToPageForm()
      return
    }
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
    if (component != undefined) {
      const componentRef: any = this.container.createComponent(ComponentControlComponent)
      componentRef.instance.componentIndex = index
      componentRef.instance.component = component.componentClass
      componentRef.instance.componentData = component.componentData
      this.componentsRef.push(componentRef)
    }
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

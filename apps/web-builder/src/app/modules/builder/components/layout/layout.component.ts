import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarAComponent } from 'libs/ui/src/lib/navbar/components';
import { ComponentItem } from 'apps/web-builder/src/app/model/component.interface';

@Component({
  selector: 'ionhour-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  components: ComponentItem[] = []

  @ViewChild('container', { read: ViewContainerRef })  
  container!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private breakpointObserver: BreakpointObserver
  ) { } 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  get navComponent() {
    return NavbarAComponent
  }

  add(component: any) {
    this.container.clear()
    this.components.push({ component })
    for (let component of this.components) {
      this.createComponent(component.component)
    }
  }

  createComponent(component: any): void {  
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.container.createComponent(dynamicComponentFactory);  
  }

}

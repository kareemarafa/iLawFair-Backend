import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutModule, HeaderModule, NavbarModule } from '@ionhour/ui';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ElementListComponent, SubElementListComponent } from './components';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    LayoutComponent,
    ElementListComponent,
    SubElementListComponent,
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavbarModule,
    HeaderModule,
    AboutModule,
    MatSlideToggleModule,
    DragDropModule
  ],
})
export class BuilderModule {}

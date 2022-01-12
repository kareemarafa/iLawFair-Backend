import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAComponent } from './components/header-a/header-a.component';
import { HeaderBComponent } from './components/header-b/header-b.component';
import { HeaderCComponent } from './components/header-c/header-c.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HeaderAComponent,
    HeaderBComponent,
    HeaderCComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class HeaderModule { }

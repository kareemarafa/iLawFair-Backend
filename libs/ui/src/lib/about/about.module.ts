import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAComponent } from './components/about-a/about-a.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AboutAComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class AboutModule { }

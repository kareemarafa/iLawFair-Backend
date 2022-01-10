import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAComponent, NavbarBComponent } from './components';

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent],
  imports: [CommonModule],
  exports: [NavbarAComponent],
})
export class NavbarModule {}

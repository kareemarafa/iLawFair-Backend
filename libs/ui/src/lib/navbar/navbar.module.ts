import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAComponent } from './components';
import { NavbarBComponent } from './components/navbar-b/navbar-b.component';

@NgModule({
  declarations: [NavbarAComponent, NavbarBComponent],
  imports: [CommonModule],
  exports: [NavbarAComponent],
})
export class NavbarModule {}

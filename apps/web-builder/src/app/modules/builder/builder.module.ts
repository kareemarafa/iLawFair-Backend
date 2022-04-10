import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BuilderRoutingModule } from './builder-routing.module'
import { LayoutComponent } from './components/layout/layout.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import {
  AboutModule,
  ActionModule,
  CountModule,
  GalleryModule,
  HeaderModule,
  NavbarModule,
  ServiceModule,
  PricesModule,
  ContactModule,
  TestimonialsModule,
  DividerModule
} from '@ionhour/ui'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ElementListComponent, SubElementListComponent, PageFormDialogComponent } from './components'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatRippleModule } from '@angular/material/core'
import { WrapperComponent } from './components/sub-element-list/wrapper/wrapper.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { CoreModule } from '@ionhour/core'
import { MatMenuModule } from '@angular/material/menu'
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FlexModule } from '@angular/flex-layout'
import { FormlyMatSliderModule } from '@ngx-formly/material/slider'
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SocialMediaModule } from '../../../../../../libs/ui/src/lib/social-media/social-media.module'

@NgModule({
  declarations: [LayoutComponent, ElementListComponent, SubElementListComponent, WrapperComponent, PageFormDialogComponent],
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
    DragDropModule,
    MatRippleModule,
    ServiceModule,
    CountModule,
    ActionModule,
    GalleryModule,
    ContactModule,
    PricesModule,
    MatTooltipModule,
    TestimonialsModule,
    DividerModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FlexModule,
    FormlyMatSliderModule,
    FormlyMatToggleModule,
    FormlyMaterialModule,
    CoreModule,
    FormsModule,
    MatSnackBarModule,
    SocialMediaModule
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }]
})
export class BuilderModule {}

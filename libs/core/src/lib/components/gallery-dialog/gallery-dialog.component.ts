import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { UserGalleryComponent } from '../user-gallery/user-gallery.component'
import { FieldType } from '@ngx-formly/material/form-field'

@Component({
  selector: 'ionhour-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent extends FieldType {
  constructor(public dialog: MatDialog) {
    super()
  }

  openUserGallery() {
    const dialogRef = this.dialog.open(UserGalleryComponent, {
      height: '500px',
      width: '700px',
      hasBackdrop: true
    })
    dialogRef.afterClosed().subscribe((result) => {
      const value = result?.image?.fileName
      return this.formControl.setValue(value)
    })
  }
}

import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  isLoading = new Subject<boolean>()

  constructor(private _snackBar: MatSnackBar) {}
  open(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 3000
    })
  }
}

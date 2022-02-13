import { Component, Inject, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActionService } from '../../action.service'

@Component({
  selector: 'ionhour-action-a',
  templateUrl: './action-a.component.html',
  styleUrls: ['./action-a.component.scss']
})
export class ActionAComponent implements OnInit {
  componentData: any
  constructor(private http: HttpClient, public dialog: MatDialog, private service: ActionService) {}

  ngOnInit() {
    this.http.get('http://localhost:3333/api/section').subscribe((data: any) => {
      this.componentData = data.componentData
    })

    this.service.componentData$.subscribe((data: any) => {
      this.componentData = data
      this.http
        .post('http://localhost:3333/api/section', {
          componentName: 'Section',
          componentData: data
        })
        .subscribe()
    })
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: this.componentData,
      width: '700px',
      height: '500px'
    })
  }
}

@Component({
  selector: 'ionhour-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html'
})
export class DialogDataExampleDialog implements OnInit {
  form!: FormGroup
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: ActionService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [''],
      text: [''],
      btn: ['']
    })
    if (this.data) {
      this.form.patchValue(this.data)
    }
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  submit(): void {
    console.log(this.form.value)
    this.service.setComponentData(this.form.value)
    this.dialogRef.close()
  }
}

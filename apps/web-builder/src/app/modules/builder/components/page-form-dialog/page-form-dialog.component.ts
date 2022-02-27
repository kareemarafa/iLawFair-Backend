import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { PagesService } from '../../../pages/pages.service'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ToasterService } from '@ionhour/core'
import { PageInterface } from '@ionhour/interfaces'

@UntilDestroy()
@Component({
  selector: 'ionhour-page-form-dialog',
  templateUrl: './page-form-dialog.component.html',
  styleUrls: ['./page-form-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFormDialogComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true
  fields: FormlyFieldConfig[] = [
    {
      key: 'pageName',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Page name',
        placeholder: 'Enter page name',
        required: true
      }
    }
  ]
  model: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number; item: PageInterface },
    private service: PagesService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    public dialogRef: MatDialogRef<PageFormDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      pageName: ['']
    })
  }

  ngOnInit() {
    Promise.resolve().then(() => {
      if (this.data?.item) {
        this.form.patchValue(this.data.item)
      }
    })
  }

  submit(model: { pageName: string }): void {
    const data = {
      pageName: model.pageName,
      project: { id: this.data.projectId }
    }
    if (!this.data.item) {
      this.service
        .create(data)
        .pipe(untilDestroyed(this))
        .subscribe((res) => this.handleSuccess(res.message))
    } else {
      this.service
        .update(this.data.item.id, data)
        .pipe(untilDestroyed(this))
        .subscribe((res) => this.handleSuccess(res.message))
    }
  }

  handleSuccess(message: string) {
    this.dialogRef.close()
    this.toasterService.open(message)
  }

  ngOnDestroy() {
    console.log(PageFormDialogComponent.name, 'destroyed')
  }
}

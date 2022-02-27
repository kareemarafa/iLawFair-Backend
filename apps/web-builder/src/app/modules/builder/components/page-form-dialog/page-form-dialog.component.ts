import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PagesService } from '../../../pages/pages.service'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ToasterService } from '@ionhour/core'

@UntilDestroy()
@Component({
  selector: 'ionhour-page-form-dialog',
  templateUrl: './page-form-dialog.component.html',
  styleUrls: ['./page-form-dialog.component.scss']
})
export class PageFormDialogComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true
  isEdit = false
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
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
    private service: PagesService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      pageName: ['']
    })
  }

  ngOnInit() {}

  submit(model: { pageName: string }): void {
    const data = {
      pageName: model.pageName,
      project: { id: this.data.projectId }
    }
    if (!this.isEdit) {
      this.service
        .create(data)
        .pipe(untilDestroyed(this))
        .subscribe((res) => {
          console.log({ res })
          this.handleSuccess(res.message)
        })
    } else {
      // this.service
      // .update(this.itemId, model)
      // .pipe(untilDestroyed(this))
      // .subscribe((res) => this.handleSuccess(res.message))
    }
  }

  handleSuccess(message: string) {
    this.toasterService.open(message)
  }

  ngOnDestroy() {
    console.log(PageFormDialogComponent.name, 'destroyed')
  }
}

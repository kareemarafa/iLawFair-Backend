import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProjectsService } from '../../projects.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ToasterService } from '@ionhour/core'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  selector: 'ionhour-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
@UntilDestroy()
export class ProjectsFormComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true
  isEdit = false
  itemId!: number
  item$!: Observable<object>
  fields: FormlyFieldConfig[] = [
    {
      key: 'projectName',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Project name',
        placeholder: 'Enter project name',
        required: true
      }
    },
    {
      key: 'themeFont',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Theme font',
        placeholder: 'Enter Theme font',
        required: true
      }
    },
    {
      key: 'background',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Background',
        placeholder: 'Enter background',
        required: true
      }
    },
    {
      key: 'themeColor',
      type: 'input',
      templateOptions: {
        type: 'color',
        label: 'Theme color',
        placeholder: 'Enter theme color',
        required: true
      }
    },
    {
      key: 'logo',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Logo',
        placeholder: 'Enter logo',
        required: true
      }
    },
    {
      key: 'favicon',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'favicon',
        placeholder: 'Enter favicon',
        required: true
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        type: 'text',
        label: 'Description',
        placeholder: 'Enter description',
        required: true
      }
    }
  ]
  model = {}

  constructor(
    private formBuilder: FormBuilder,
    private service: ProjectsService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToasterService
  ) {
    this.form = this.formBuilder.group({
      projectName: [''],
      themeFont: [''],
      background: [''],
      themeColor: [''],
      logo: [''],
      favicon: [''],
      description: ['']
    })
  }

  ngOnInit() {
    this.form.controls['projectName'].setValue('Basic Project')
    this.form.controls['themeFont'].setValue('Arial')
    this.form.controls['background'].setValue('none')
    this.form.controls['themeColor'].setValue('red')
    this.form.controls['logo'].setValue('none')
    this.form.controls['favicon'].setValue('none')
    this.form.controls['description'].setValue('basic project description')
    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      if (queryParams['id']) {
        this.isEdit = true
        this.itemId = queryParams['id']
        this.item$ = this.service.getOne(queryParams['id'])
      }
    })
    this.isEdit && this.item$.pipe(untilDestroyed(this)).subscribe((item) => this.form.patchValue(item))
  }

  submit(model: any): void {
    const user = JSON.parse(localStorage.getItem('user') ?? '')
    const _model = { ...model, user: { id: user?.id } }
    if (!this.isEdit) {
      this.service
        .create(_model)
        .pipe(untilDestroyed(this))
        .subscribe((res) => this.handleSuccess(res.message))
    } else {
      this.service
        .update(this.itemId, _model)
        .pipe(untilDestroyed(this))
        .subscribe((res) => this.handleSuccess(res.message))
    }
  }

  handleSuccess(message: string) {
    this.toasterService.open(message)
    return this.router.navigate([`dashboard/${this.service.routerPrefix}`])
  }

  ngOnDestroy() {
    this.alive = false
  }
}

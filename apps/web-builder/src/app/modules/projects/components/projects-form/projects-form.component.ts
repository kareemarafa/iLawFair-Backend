import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { takeWhile } from 'rxjs'
import { ProjectsService } from '../../projects.service'

@Component({
  selector: 'ionhour-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit, OnDestroy {
  form: FormGroup
  alive = true

  constructor(private formBuilder: FormBuilder, private service: ProjectsService, public router: Router) {
    this.form = this.formBuilder.group({
      name: [''],
      themeFont: [''],
      background: [''],
      themeColor: [''],
      logo: [''],
      favicon: [''],
      description: ['']
    })
  }

  ngOnInit() {
    this.form.controls['name'].setValue('Basic Project')
    this.form.controls['themeFont'].setValue('Arial')
    this.form.controls['background'].setValue('none')
    this.form.controls['themeColor'].setValue('red')
    this.form.controls['logo'].setValue('none')
    this.form.controls['favicon'].setValue('none')
    this.form.controls['description'].setValue('basic project description')
  }

  create() {
    this.service
      .create(this.form.value)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.router.navigate(['dashboard/projects']))
  }

  ngOnDestroy() {
    this.alive = false
  }
}

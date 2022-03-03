import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { PagesService } from '../../pages.service'

@Component({
  selector: 'ionhour-pages-form',
  templateUrl: './pages-form.component.html',
  styleUrls: ['./pages-form.component.scss']
})
export class PagesFormComponent implements OnInit, OnDestroy {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private service: PagesService, public router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      pageName: [''],
      project: ['']
    })
  }

  ngOnInit() {
    this.form.controls['pageName'].setValue('test page1')
    this.form.controls['project'].setValue(1)
  }

  create() {
    // const payload: LoginPayloadInterface = {
    //   username: this.form.value.username,
    //   password: this.form.value.password,
    //   remember: false
    // };
    // this.store.dispatch({ type: ResumeAuthActionTypes.ResumeAPI_USER_LOGIN, payload })
    // this.loginState.login(payload)
    //   .pipe(
    //     untilDestroyed(this)
    //   )
    //   .subscribe(() =>
    return this.router.navigate(['pages'])
    // );
  }

  ngOnDestroy() {
    console.log('PagesFormComponent Destroyed')
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'ionhour-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit, OnDestroy {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    // private resumeAuthService: ResumeAuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {
    // this.form.controls["username"].setValue("owner");
    // this.form.controls["password"].setValue("123456789");
  }

  login() {
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
    return this.router.navigate(['projects'])
    // );
  }

  ngOnDestroy() {
    console.log('SurveyComponent Destroyed')
  }
}
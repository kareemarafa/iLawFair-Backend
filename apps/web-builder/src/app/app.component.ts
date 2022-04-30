import {Component, OnInit} from '@angular/core';
import {I18nService} from "./common/i18n.service";
import {TranslateService} from '@ngx-translate/core';
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'ionhour-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) {
  }

  ngOnInit() {
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
    // this.setDirectionVars();
  }

  // setDirectionVars() {
  //   const language = this.i18nService.language;
    // AppHelper.setDirectionVars(language === 'en-US' ? 'ltr' : 'rtl');
  // }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

}

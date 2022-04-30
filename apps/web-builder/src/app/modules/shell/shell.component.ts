import { Component, OnInit } from '@angular/core'
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  LinearScale,
  LineController,
  LineElement,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import {I18nService} from "../../common/i18n.service";

@Component({
  selector: 'ionhour-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(private i18nService: I18nService) {
  }
  ngOnInit() {
    Chart.register(
      ArcElement,
      BarController,
      BarElement,
      CategoryScale,
      DoughnutController,
      LinearScale,
      LineController,
      LineElement,
      PieController,
      PointElement,
      PolarAreaController,
      RadarController,
      RadialLinearScale,
      Title,
      Tooltip,
      Legend
    )
  }

  get currentLang(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
    // AppHelper.setDirectionVars(language === 'en-US' ? 'ltr' : 'rtl');
    // this.shared.sendLanguage.next(language);
  }
}

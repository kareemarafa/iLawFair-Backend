import { Component, OnInit } from '@angular/core'
import { I18nService } from '../../../common/i18n.service'
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
@Component({
  selector: 'ionhour-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
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
    return this.i18nService.language
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages
  }

  setLanguage(language: string) {
    this.i18nService.language = language
    // const dir = language === 'en-US' ? 'ltr' : 'rtl';
    // document.body.setAttribute('dir', dir);
    // window.location.reload()
  }
}


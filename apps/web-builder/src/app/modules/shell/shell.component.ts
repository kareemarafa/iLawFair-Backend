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

@Component({
  selector: 'ionhour-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
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
}

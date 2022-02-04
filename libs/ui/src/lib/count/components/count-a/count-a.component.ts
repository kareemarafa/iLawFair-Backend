import { AfterViewInit, Component, OnInit } from '@angular/core'
declare const countdown: any
@Component({
  selector: 'ionhour-count-a',
  templateUrl: './count-a.component.html',
  styleUrls: ['./count-a.component.scss']
})
export class CountAComponent implements OnInit, AfterViewInit {
  componentData: any = {
    date: `7-3-2022`,
    time: `09:00`
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCountDown()
  }

  initCountDown() {
    new countdown({
      target: '.countdown__a',
      dayWord: ' days',
      hourWord: ' hours',
      minWord: ' mins',
      secWord: ' secs'
    })
  }
}

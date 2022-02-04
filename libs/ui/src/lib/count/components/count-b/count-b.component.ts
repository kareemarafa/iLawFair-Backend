import { AfterViewInit, Component, OnInit } from '@angular/core'
declare const countdown: any

@Component({
  selector: 'ionhour-count-b',
  templateUrl: './count-b.component.html',
  styleUrls: ['./count-b.component.scss']
})
export class CountBComponent implements OnInit, AfterViewInit {
  componentData: any = {
    title: `Service A Title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
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
      target: '.countdown__b',
      dayWord: ' days',
      hourWord: ' hours',
      minWord: ' mins',
      secWord: ' secs'
    })
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ElementsService } from '@ionhour/core'
import { takeWhile } from 'rxjs'
import { CountdownConfig } from 'ngx-countdown'

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1] // million seconds
]

@Component({
  selector: 'ionhour-count-a',
  templateUrl: './count-a.component.html',
  styleUrls: ['./count-a.component.scss']
})
export class CountAComponent implements OnInit, OnDestroy {
  @Input() componentData: any
  alive = true

  config: CountdownConfig = {
    format: 'dd HH mm ss',
    prettyText: (text) => {
      return text
        .split(' ')
        .map((v) => `<div class="item">${v}</div>`)
        .join('')
    }
  }

  constructor(private elementService: ElementsService) {}

  ngOnInit(): void {
    this.config = this.setTime(this.componentData)
    this.elementService.contentChange$.pipe(takeWhile(() => this.alive)).subscribe((changes) => {
      if (changes?.componentName === 'CountAComponent') {
        this.config = this.setTime(this.componentData)
      }
    })
  }

  setTime({ date, time }: any): any {
    const stopTime = Date.parse(`${date}T${time}:00`)
    return { ...this.config, stopTime: new Date(stopTime).getTime() }
  }

  ngOnDestroy() {
    this.alive = false
  }
}

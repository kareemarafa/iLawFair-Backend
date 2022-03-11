import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { takeWhile } from 'rxjs'
import { ElementsService } from '@ionhour/core'

@Component({
  selector: 'ionhour-gallery-a',
  templateUrl: './gallery-a.component.html',
  styleUrls: ['./gallery-a.component.scss']
})
export class GalleryAComponent implements OnInit, OnDestroy {
  @Input() componentData: any
  alive = true

  constructor(private elementService: ElementsService) {}

  ngOnInit(): void {
    this.elementService.contentChange$.pipe(takeWhile(() => this.alive)).subscribe((changes) => {
      if (changes?.componentName === 'GalleryAComponent') {
        changes?.componentData?.items?.forEach((item: any) => {
          if (item?.image) {
            console.log(changes)
          }
        })
      }
    })
  }

  ngOnDestroy() {
    this.alive = false
  }
}

import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { ElementsService } from '../services'
import { takeWhile } from 'rxjs'

@Directive({
  selector: '[ionhourHOCSectionStyle]'
})
export class HOCSectionStyleControlDirective implements OnInit, OnDestroy {
  @Input() public styles!: Record<string, any>
  @Input() public sectionOptions!: Record<string, any>
  @HostBinding('style') appliedStyles!: Record<string, any>
  @HostBinding('class') appliedClasses!: Record<string, any>
  alive = true
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private elementService: ElementsService) {
    this.elementService.contentChange$.pipe(takeWhile(() => this.alive)).subscribe(() => {
      this.handleSectionStyles()
      this.handleSectionClasses()
    })
  }

  ngOnInit() {
    this.handleSectionStyles()
    this.handleSectionClasses()
  }

  handleSectionStyles() {
    this.appliedStyles = {
      'background-color': this.styles['backgroundColor'],
      'background-image': 'url(' + this.styles['backgroundImage'] + ')',
      'padding-top': this.styles['paddingTop'] + 'px !important',
      'padding-bottom': this.styles['paddingBottom'] + 'px !important',
      'padding-left': this.styles['paddingLeft'] + 'px !important',
      'padding-right': this.styles['paddingRight'] + 'px !important',
      'background-position': 'center',
      'background-size': 'cover'
    }
  }

  handleSectionClasses() {
    this.appliedClasses = {
      // 'container': !this.sectionOptions['fullWidth'],
      // 'container-fluid': this.sectionOptions['fullWidth']
    }
  }

  ngOnDestroy() {
    this.alive = false
  }
}

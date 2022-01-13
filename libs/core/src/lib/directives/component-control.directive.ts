import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
  selector: '[ionhourComponentControl]'
})
export class ComponentControlDirective {
  @Output() checkMouseInside: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.checkMouseInside.emit(true)
    this.highlight('2px dashed #c9c9c9')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.checkMouseInside.emit(false)
    this.highlight('')
  }

  private highlight(border: string) {
    this.eleRef.nativeElement.style.outline = border
  }
}

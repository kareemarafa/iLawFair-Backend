import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-testimonials-a',
  templateUrl: './testimonials-a.component.html',
  styleUrls: ['./testimonials-a.component.scss']
})
export class TestimonialsAComponent {
  @Input() componentData: any
}

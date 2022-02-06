import { Component } from '@angular/core'

@Component({
  selector: 'ionhour-testimonials-a',
  templateUrl: './testimonials-a.component.html',
  styleUrls: ['./testimonials-a.component.scss']
})
export class TestimonialsAComponent {
  componentData = {
    title: 'Testimonials',
    description:
      'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.',
    items: [
      {
        imageUrl: './assets/500x300.png',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        name: 'Mohamed Hassan',
        title: 'CEO',
        companyName: 'Dot Us'
      },
      {
        imageUrl: './assets/500x300.png',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        name: 'Mohamed Hassan',
        title: 'CEO',
        companyName: 'Dot Us'
      },
      {
        imageUrl: './assets/500x300.png',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        name: 'Mohamed Hassan',
        title: 'CEO',
        companyName: 'Dot Us'
      }
    ]
  }
}

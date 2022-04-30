import {Component, Input} from '@angular/core';

@Component({
  selector: 'ionhour-newsletter-a',
  templateUrl: './newsletter-a.component.html',
  styleUrls: ['./newsletter-a.component.css']
})
export class NewsletterAComponent {
  @Input() componentData: any;
}

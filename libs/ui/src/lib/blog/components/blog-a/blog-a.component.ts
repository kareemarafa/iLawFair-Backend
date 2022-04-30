import {Component, Input} from '@angular/core';

@Component({
  selector: 'ionhour-blog-a',
  templateUrl: './blog-a.component.html',
  styleUrls: ['./blog-a.component.css']
})
export class BlogAComponent {
  @Input() componentData: any;
}

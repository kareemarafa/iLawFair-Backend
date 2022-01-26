import { Component } from '@angular/core'

@Component({
  selector: 'ionhour-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.scss']
})
export class AboutAComponent {
  componentData = {
    image: 'assets/images.jpeg',
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
}

import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.scss']
})
export class AboutAComponent implements OnInit {
  @Input()
  componentData: any

  ngOnInit() {
    console.log(this.componentData)
    // this.componentData = [
    //   {
    //     image: './assets/500x300.png',
    //     title: 'Lorem Ipsum',
    //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
    //   },
    //   {
    //     image: './assets/500x300.png',
    //     title: 'Lorem Ipsum',
    //     body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged."
    //   }
    // ]
  }
}

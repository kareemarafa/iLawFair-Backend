import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-gallery-a',
  templateUrl: './gallery-a.component.html',
  styleUrls: ['./gallery-a.component.scss']
})
export class GalleryAComponent implements OnInit {
  componentData: any = {
    title: `Section Title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis nemo reiciendis, fugiat praesentium est.`,
    items: [
      {
        image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
        title: `Item Title`
      },
      {
        image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
        title: `Item Title`
      },
      {
        image: `https://static01.nyt.com/images/2022/02/04/arts/02Galleries-Sills/merlin_200977392_31227600-6e44-4774-bc5d-c68d1e35393a-articleLarge.jpg?quality=75&auto=webp&disable=upscale`,
        title: `Item Title`
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}

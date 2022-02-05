import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ionhour-contact-a',
  templateUrl: './contact-a.component.html',
  styleUrls: ['./contact-a.component.scss']
})
export class ContactAComponent implements OnInit {
  componentData: any = {
    address: `75530 Shad Path Apt. 847`,
    phone: `(675) 486-3267 x50856`,
    email: `crooks.sherman@wuckert.com`
  }
  constructor() {}

  ngOnInit(): void {}
}

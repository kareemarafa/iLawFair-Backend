import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'ionhour-font-selector',
  templateUrl: './font-selector.component.html',
  styleUrls: ['./font-selector.component.scss']
})
export class FontSelectorComponent extends FieldType implements OnInit {
  fonts!: any[]
  override formControl!: FormControl

  constructor(private http: HttpClient) {
    super()
  }

  ngOnInit(): void {
    const req$ = this.http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApn536m54TwSn-g6ZP1yGUJmozV8KhpBo')
    req$.subscribe(({ items }: any) => (this.fonts = items))
  }
}

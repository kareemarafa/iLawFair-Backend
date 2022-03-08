import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'ionhour-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaItems: any = {}
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadList()
  }

  loadList() {
    const user = localStorage.getItem('user')
    const { id } = user && JSON.parse(user)
    return this.http
      .get(`/api/media?filter=user.id||$eq||${id}`)
      .pipe(
        map((response: any) => {
          const data = response.data.map((item: any) => ({ ...item, fileName: environment.serverUrl + '/' + item.fileName }))
          return { ...response, data }
        })
      )
      .subscribe((items) => (this.mediaItems = items))
  }
}

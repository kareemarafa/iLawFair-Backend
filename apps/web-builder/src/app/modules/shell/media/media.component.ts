import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '../../../../environments/environment'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'ionhour-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaItems: any = {}
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'col-4',
      fieldGroup: [
        {
          className: 'col',
          key: 'image',
          type: 'file'
        }
      ]
    }
  ]

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadList()
  }

  loadList() {
    const user = localStorage.getItem('user')
    const { id } = user && JSON.parse(user)
    return this.http
      .get(`${environment.serverUrl}/api/media?filter=user.id||$eq||${id}&sort=createdDate,DESC`)
      .pipe(
        map((response: any) => {
          const data = response.data.map((item: any) => ({
            ...item,
            fileName: environment.serverUrl + '/' + item.fileName
          }))
          return { ...response, data }
        })
      )
      .subscribe((items) => (this.mediaItems = items))
  }

  async submit() {
    const token = localStorage.getItem('auth')
    const headers = {
      responseType: 'blob' as 'json',
      Authorization: `Bearer ${token}`
    }
    const formData = new FormData()
    const images: File[] = this.model?.image
    const file = images[0] as File
    formData.append('image', file, file.name)
    return this.http.post(`${environment.serverUrl}/api/media/upload`, formData, { headers }).subscribe(() => this.loadList())
  }
}

import { Component, Inject, OnInit } from '@angular/core'
import { map } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { APP_CONFIG } from '../../core.module'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'ionhour-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.scss']
})
export class UserGalleryComponent implements OnInit {
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
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserGalleryComponent>
  ) {}

  ngOnInit(): void {
    this.loadList()
  }

  loadList() {
    const user = localStorage.getItem('user')
    const { id } = user && JSON.parse(user)
    const token = localStorage.getItem('tenant-auth')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    return this.http
      .get(`${this.appConfig[0].serverUrl}/api/media?filter=user.id||$eq||${id}&sort=createdDate,DESC`, { headers })
      .pipe(
        map((response: any) => {
          const data = response.data.map((item: any) => ({
            ...item,
            fileName: this.appConfig[0].serverUrl + '/' + item.fileName
          }))
          return { ...response, data }
        })
      )
      .subscribe((items) => (this.mediaItems = items))
  }

  uploadImage() {
    const token = localStorage.getItem('tenant-auth')
    const headers = {
      responseType: 'blob' as 'json',
      Authorization: `Bearer ${token}`
    }
    const formData = new FormData()
    const file = this.model?.image[0] as File
    file && formData?.append('image', file, file.name)
    return (
      file &&
      this.http
        .post(`${this.appConfig[0].serverUrl}/api/media/upload`, formData, { headers })
        .pipe(map((response: any) => ({ ...response, fileName: `${this.appConfig[0].serverUrl}/${response.fileName}` })))
        .subscribe((response: any) => this.loadList())
    )
  }

  selectImage(image: any) {
    this.dialogRef.close({ image })
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  cid!: string
  constructor(private http: HttpClient) {
    this.cid = 'pages'
  }

  get routerPrefix(): string {
    return this.cid
  }

  create(data: any) {
    return this.http.post('/api/pages', data).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  update(id: number, data: any) {
    return this.http.patch(`/api/pages/${id}`, data).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  getOne(id: any) {
    return this.http.get(`/api/pages/${id}?join=pages`).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  delete(id: any) {
    return this.http.delete(`/api/pages/${id}`).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  loadList() {
    return this.http.get('/api/pages').pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }
}

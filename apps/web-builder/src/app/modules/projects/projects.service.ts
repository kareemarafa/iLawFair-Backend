import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  cid!: string

  constructor(private http: HttpClient) {
    this.cid = 'projects'
  }

  get routerPrefix(): string {
    return this.cid
  }

  create(data: any) {
    return this.http.post('/api/projects', data).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  update(id: number, data: any) {
    return this.http.patch(`/api/projects/${id}`, data).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  getOne(id: any) {
    return this.http.get(`/api/projects/${id}?join=pages`).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  delete(id: any) {
    return this.http.delete(`/api/projects/${id}`).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }

  loadList() {
    const user = localStorage.getItem('user')
    const { id } = user && JSON.parse(user)
    return this.http.get(`/api/projects?filter=user.id||$eq||${id}`).pipe(
      map((response: any) => {
        console.log({ response })
        return response
      })
    )
  }
}

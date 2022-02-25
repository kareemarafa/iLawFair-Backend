import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _credentials: any

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post('/api/auth/login', credentials).pipe(
      map((ctx: any) => {
        this.setCredentials(ctx)
        return ctx
      })
    )
  }

  register(userDataDto: any) {
    return this.http.post('/api/auth/register', userDataDto)
  }

  setCredentials(credentials: any) {
    this._credentials = credentials || null
    if (credentials) {
      localStorage.setItem('auth', credentials.accessToken)
    } else {
      localStorage.removeItem('auth')
      localStorage.removeItem('auth')
    }
  }
}

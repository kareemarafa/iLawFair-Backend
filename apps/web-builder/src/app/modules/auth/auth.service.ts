import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post('/api/auth/login', credentials)
  }

  register(userDataDto: any) {
    return this.http.post('/api/auth/register', userDataDto)
  }
}

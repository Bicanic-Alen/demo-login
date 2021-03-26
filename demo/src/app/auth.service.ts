import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUtente(email: string, pws : string) {
    const url = `https://3000-lavender-damselfly-n72nchpz.ws-eu03.gitpod.io/users/${email}/${pws}`;
    return this.http.get(url);
  }
}

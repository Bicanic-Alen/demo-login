import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUtente(email: string, pws : string) {
    const url = `https://3000-gold-horse-htjbec9d.ws-eu03.gitpod.io/users/user/${email}/${pws}`;
    return this.http.get(url);
  }
}

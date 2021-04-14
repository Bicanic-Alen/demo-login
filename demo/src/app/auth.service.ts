import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUtente(email: string, psw : string) {
    const url = `https://3000-emerald-spider-qpb42vqc.ws-eu03.gitpod.io/users/${email}/${psw}`;
    return this.http.get(url);
  }

  signup(nome: string, cognome :string, email: string, psw: string){
    const url = `https://3000-emerald-spider-qpb42vqc.ws-eu03.gitpod.io/signup/${nome}/${cognome}/${email}/${psw}`;
    return this.http.get(url);
  }
}

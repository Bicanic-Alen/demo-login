import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryUserService {

  constructor(private http: HttpClient) { }
  getH(email: string, psw : string) {
    const url = `https://3000-indigo-bat-5tm0rwgx.ws-eu07.gitpod.io/getcronologia/${email}`;
    return this.http.get(url);
  }

  addH(nome: string, cognome :string, email: string, psw: string){
    const url = `https://3000-indigo-bat-5tm0rwgx.ws-eu07.gitpod.io/uploadcronologia/${nome}/${cognome}/${email}/${psw}`;
    return this.http.get(url);
  }
}

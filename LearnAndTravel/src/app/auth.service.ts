import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUtente(email: string, psw : string) {
    const url = `https://3000-bronze-clownfish-ta3u7tsk.ws-eu04.gitpod.io/users/${email}/${psw}`;
    return this.http.get(url);
  }

  signup(nome: string, cognome :string, email: string, psw: string){
    const url = `https://3000-bronze-clownfish-ta3u7tsk.ws-eu04.gitpod.io/signup/${nome}/${cognome}/${email}/${psw}`;
    return this.http.get(url);
  }
  forgotPsw( email: string, cod : string){
    const url = `https://3000-bronze-clownfish-ta3u7tsk.ws-eu04.gitpod.io/forgotPassword/${email}/${cod}`;
    return this.http.get(url);
  }
  changeForgotPsw( email: string, cod :string, psw: string){
    const url = `https://3000-bronze-clownfish-ta3u7tsk.ws-eu04.gitpod.io/changeForgotPassword/${email}/${cod}/${psw}`;
    return this.http.get(url);
  }
  changePsw(email: string, oldpsw : string, newpsw : string){
    const url = `https://3000-bronze-clownfish-ta3u7tsk.ws-eu04.gitpod.io/change/${email}/${oldpsw}/${newpsw}`;
    return this.http.get(url);
  }
}

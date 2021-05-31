import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUtente(email: string, psw : string) {
    const url = `https://learnandtravelserver.glitch.me/users/${email}/${psw}`;
    return this.http.get(url);
  }

  signup(nome: string, cognome :string, email: string, psw: string){
    const url = `https://learnandtravelserver.glitch.me/signup/${nome}/${cognome}/${email}/${psw}`;
    return this.http.get(url);
  }
  forgotPsw( email: string, cod : string){
    const url = `https://learnandtravelserver.glitch.me/forgotPassword/${email}/${cod}`;
    return this.http.get(url);
  }
  changeForgotPsw( email: string, cod :string, psw: string){
    const url = `https://learnandtravelserver.glitch.me/changeForgotPassword/${email}/${cod}/${psw}`;
    return this.http.get(url);
  }
  changePsw(email: string, oldpsw : string, newpsw : string){
    const url = `https://learnandtravelserver.glitch.me/change/${email}/${oldpsw}/${newpsw}`;
    return this.http.get(url);
  }
}

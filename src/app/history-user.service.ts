import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryUserService {

  constructor(private http: HttpClient) { }
  getH(email: string) {
    const url = `https://learnandtravelloginserver.herokuapp.com/getcronologia/${email}`;
    return this.http.get(url);
  }

  addH(email : string, nome : string, y: any, x: any, y1 :any, x1: any){
    const url = `https://learnandtravelloginserver.herokuapp.com/uploadcronologia/${email}/${nome}/${y}/${x}/${y1}/${x1}`;
    return this.http.get(url);
  }

  delH(email : string){
    const url = `https://learnandtravelloginserver.herokuapp.com/deletecronologia/${email}`;
    return this.http.get(url);
  }
}

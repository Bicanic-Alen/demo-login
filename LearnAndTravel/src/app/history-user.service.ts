import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryUserService {

  constructor(private http: HttpClient) { }
  getH(email: string) {
    const url = `https://3000-blush-stoat-h0aqmedf.ws-eu08.gitpod.io/getcronologia/${email}`;
    return this.http.get(url);
  }

  addH(email : string, nome : string, y: any, x: any, y1 :any, x1: any){
    const url = `https://3000-blush-stoat-h0aqmedf.ws-eu08.gitpod.io/uploadcronologia/${email}/${nome}/${y}/${x}/${y1}/${x1}`;
    return this.http.get(url);
  }
}

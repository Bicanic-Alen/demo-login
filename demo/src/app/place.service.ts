import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }
  searchPlace(y: any, x: any, y1 :any, x1: any) {
    const url = `https://3000-olive-butterfly-0hagcz5e.ws-eu04.gitpod.io/place/${y}/${x}/${y1}/${x1}`;
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapinfoService {

  private mapInfo = new BehaviorSubject(undefined);
  sharedmapInfo = this.mapInfo.asObservable();

  constructor() { }

  newData(map: any) {
    this.mapInfo.next(map);
  }
}

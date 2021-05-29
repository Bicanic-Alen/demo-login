import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveCronoService {

  private cronologiaInfo = new BehaviorSubject(undefined);
  sharedcronologiaInfo = this.cronologiaInfo.asObservable();

  constructor() { }

  uploadCronologia(cronologia: any) {
    this.cronologiaInfo.next(cronologia)
  }
}

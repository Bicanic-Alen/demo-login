import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverpassService {

  private emailInfo = new BehaviorSubject(undefined);
  sharedEmailInfo = this.emailInfo.asObservable();

  constructor() { }

  newEmail(email: any) {
    this.emailInfo.next(email);
  }
}

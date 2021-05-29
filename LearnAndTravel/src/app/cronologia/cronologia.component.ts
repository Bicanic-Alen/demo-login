import { Component, OnInit } from '@angular/core';
import { SaveCronoService } from '../save-crono.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Location} from '@angular/common'
import { RecoverpassService } from '../recoverpass.service';
import { Observable } from 'rxjs';
import { HistoryUserService } from '../history-user.service';

@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.component.html',
  styleUrls: ['./cronologia.component.css']
})
export class CronologiaComponent implements OnInit {
  resultCrono : any;
  city:string;
  obs : Observable<object>;
  email : any;
  delcrono:any;

  constructor(private router: Router, private crono : HistoryUserService,private Scronologia: SaveCronoService, private location: Location, private recover : RecoverpassService) { }

  ngOnInit(): void {
    this.Scronologia.sharedcronologiaInfo.subscribe(cronologia => this.resultCrono = cronologia);
     this.recover.sharedEmailInfo.subscribe(mail => this.email = mail);
  }
  back() : void
  {
    this.location.back();
  }

  dropHistory(){
    this.obs = this.crono.delH(this.email);
    this.obs.subscribe(this.getData);
  }

  getData = (data) =>{
    this.delcrono = data;
  }



}

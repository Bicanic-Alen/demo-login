import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MapService } from '../map.service';
import { PlaceService } from '../place.service';
import { MapinfoService } from '../mapinfo.service';
import { HistoryUserService } from '../history-user.service';
import { UserService } from '../user.service';
import { RecoverpassService } from '../recoverpass.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: any;
  text: any;
  city: any;
  y : any;
  x : any;
  y1 : any;
  x1 : any;
  email :  any;
  obs: Observable<Object>;
  resPlace: any;
  restCro:any;
  subscription: Subscription;

  constructor(private map: MapService, private recover : RecoverpassService,private place: PlaceService, private mapInfo : MapinfoService, private crono : HistoryUserService) { }

  ngOnInit(): void {
    this.map.buildMap();

    //riceve i dati dalla mappa
    this.subscription = this.map.getDataSubjectObs().subscribe(this.getMapSearchData);
    this.recover.sharedEmailInfo.subscribe(message => this.email = message)
  }
  getMapSearchData = (message) => {
    this.results = message;
    console.log(this.results);
    this.mapInfo.newData(this.results)

    this.y = this.results.bbox[1];
    this.x = this.results.bbox[0];
    this.y1 = this.results.bbox[3];
    this.x1 = this.results.bbox[2];

    if (this.email != undefined){
    this.obs = this.crono.addH(this.email, this.results.place_name, this.y, this.x, this.y1, this.x1);
    this.obs.subscribe(this.getData);
    };

  }

  getData = (data) =>{
    this.restCro = data;
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }



}

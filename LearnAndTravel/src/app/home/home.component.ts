import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../map.service';
import { PlaceService } from '../place.service';
import { MapinfoService } from '../mapinfo.service';

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

  obs: Observable<Object>;
  resPlace: any;


  constructor(private map: MapService, private place: PlaceService, private mapInfo : MapinfoService) { }

  ngOnInit(): void {
    this.map.buildMap();

    //riceve i dati dalla mappa
    this.map.getDataSubjectObs().subscribe(this.getMapSearchData);
  }
  getMapSearchData = (message) => {
    this.results = message;
    this.mapInfo.newData(this.results)
  }

}

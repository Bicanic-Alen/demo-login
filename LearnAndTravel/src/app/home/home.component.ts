import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MapService } from '../map.service';
import { PlaceService } from '../place.service';

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


  constructor(private map: MapService, private place: PlaceService) { }

  ngOnInit(): void {
    this.map.buildMap();

    //riceve i dati dalla mappa
    this.map.getDataSubjectObs().subscribe(this.getMapSearchData);
  }
  getMapSearchData = (message) => {
    this.results = message;
    this.y = this.results.bbox[1];
    this.x = this.results.bbox[0];
    this.y1 = this.results.bbox[3];
    this.x1 = this.results.bbox[2];


    this.obs = this.place.searchPlace(this.y, this.x, this.y1, this.x1); //richiamare dati dal server
    this.obs.subscribe(this.getDataServer);
  }

  getDataServer = (data) => {
    this.resPlace = data[0];

  }

}

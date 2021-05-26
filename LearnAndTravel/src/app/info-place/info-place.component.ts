import { Component, OnInit } from '@angular/core';
import { MapinfoService } from '../mapinfo.service';
import { Observable } from 'rxjs';
import { PlaceService } from '../place.service';
import { Images } from '../models/image.model';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-info-place',
  templateUrl: './info-place.component.html',
  styleUrls: ['./info-place.component.css']
})
export class InfoPlaceComponent implements OnInit {
  results : any;
  text: any;
  city: any;
  y : any;
  x : any;
  y1 : any;
  x1 : any;
  imageslist : Array<Images>;

  obs: Observable<Object>;
  resPlace: any;
  loading = false;

  constructor(private mapInfo : MapinfoService, private place : PlaceService) { }

  ngOnInit(): void {
    this.mapInfo.sharedmapInfo.subscribe(message => this.results = message)
    this.y = this.results.bbox[1];
    this.x = this.results.bbox[0];
    this.y1 = this.results.bbox[3];
    this.x1 = this.results.bbox[2];


    this.obs = this.place.searchPlace(this.y, this.x, this.y1, this.x1); //richiamare dati dal server
    this.obs.subscribe(this.getDataServer);
  }
  getDataServer = (data) => {
    this.resPlace = data[0];

    this.imageslist = new Array<Images>();
    for (const i of this.resPlace.Immagine) {
      this.imageslist.push(new Images (i, i, this.resPlace.Città, ""));
    };
    this.loading = true;

  }



}

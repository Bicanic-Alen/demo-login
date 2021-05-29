import { Component, OnInit } from '@angular/core';
import { SaveCronoService } from '../save-crono.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.component.html',
  styleUrls: ['./cronologia.component.css']
})
export class CronologiaComponent implements OnInit {
  resultCrono : any;
  city:string;

  constructor( private Scronologia: SaveCronoService, private location: Location) { }

  ngOnInit(): void {
    this.Scronologia.sharedcronologiaInfo.subscribe(cronologia => this.resultCrono = cronologia);
  }
  back() : void
  {
    this.location.back();
  }


}

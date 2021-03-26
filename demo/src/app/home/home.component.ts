import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results : any;

  constructor(private user : UserService) { }

  ngOnInit(): void {
    this.user.shareduserInfo.subscribe(message => this.results = message)
    console.log(this.results)
  }

}

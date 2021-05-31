import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learn&Travel';
  openMenu : string = "close";
  menuicon : string = "close";
  results :  any = undefined;
  constructor(private user : UserService){}

 ngOnInit(){
   this.user.shareduserInfo.subscribe(message => this.results = message)

 }


  menu()
  {
    if (this.openMenu == "close")
    {
      this.openMenu = "open";
      this.menuicon = "close";
    }else
    {
      this.openMenu = "close";
      this.menuicon = "menu";
    }
  }




}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn&Travel';
  openMenu : string = "close";
  menuicon : string = "close";

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

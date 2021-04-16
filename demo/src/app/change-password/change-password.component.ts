import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  email : string;
  codiceS : string;
  newPassword : string;
  confirmPassword : string;
  conferma : boolean;
  provisorioConferma : boolean;



  constructor() { }

  submit(email : HTMLInputElement, cod : HTMLInputElement, newP : HTMLInputElement, confirmP : HTMLInputElement){
    this.email = email.value;
    this.codiceS = cod.value;
    this.newPassword = newP.value;
    this.confirmPassword = confirmP.value;


    this.provisorioConferma = true;
  }

  ngOnInit(): void {
    if (this.provisorioConferma == true){
      this.conferma = true;
    }
  }

}

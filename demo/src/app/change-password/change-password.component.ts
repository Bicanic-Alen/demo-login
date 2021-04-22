import { Component, OnInit } from '@angular/core';
import { RecoverpassService } from '../recoverpass.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

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
  conferma : string;
  provisorioConferma : String;
  obschange : Observable<object>;
  results : any;
  messaggio : string;



  constructor(private recover : RecoverpassService, private auth : AuthService) { }
  ngOnInit(): void {
    this.recover.sharedEmailInfo.subscribe(message => this.email = message)
  }

  submit(cod : HTMLInputElement, newP : HTMLInputElement, confirmP : HTMLInputElement){
    this.codiceS = cod.value;
    this.newPassword = newP.value;
    this.confirmPassword = confirmP.value;
    if (this.newPassword != this.confirmPassword){
      this.provisorioConferma = 'le due password non combaciano' ;
    }
    else{
      this.obschange = this.auth.changeForgotPsw(this.email, this.codiceS, this.confirmPassword);
      this.obschange.subscribe(this.getData);
    }
  }

  getData = (data)=>{
    this.results = data[0];
  }


}

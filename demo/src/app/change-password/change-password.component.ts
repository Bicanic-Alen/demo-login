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
  oldPassword : string;
  newPassword : string;
  confirmPassword : string;

  obschange : Observable<object>;
  results : any;




  constructor(private recover : RecoverpassService, private auth : AuthService) { }
  ngOnInit(): void {
    this.recover.sharedEmailInfo.subscribe(message => this.email = message)
  }

  submit(oldPsw : HTMLInputElement, newPsw:HTMLInputElement, confirmPsw : HTMLInputElement){
    this.oldPassword = oldPsw.value;
    this.newPassword = newPsw.value;
    this.confirmPassword = confirmPsw.value;
    if (this.newPassword == this.confirmPassword){
      this.obschange = this.auth.changePsw(this.email, this.oldPassword,this.confirmPassword);
      this.obschange.subscribe(this.getData);
    }



  }

  getData = (data)=>{
    this.results = data[0];
  }


}

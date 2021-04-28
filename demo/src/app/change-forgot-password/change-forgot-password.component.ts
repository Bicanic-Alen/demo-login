import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RecoverpassService } from '../recoverpass.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit {
  codiceSicurezza : string;
  newPassword : string;
  confirmPassword : string;
  obschange : Observable<object>;
  email : string;
  results : any;

  constructor(private auth: AuthService, private recover : RecoverpassService) { }

  ngOnInit(): void {
     this.recover.sharedEmailInfo.subscribe(message => this.email = message)
  }

  submit(codS : HTMLInputElement, newPsw:HTMLInputElement, confirmPsw : HTMLInputElement){
    this.codiceSicurezza = codS.value;
    this.newPassword = newPsw.value;
    this.confirmPassword = confirmPsw.value;
    if (this.newPassword == this.confirmPassword){
      this.obschange = this.auth.changeForgotPsw(this.email, this.codiceSicurezza ,this.confirmPassword);
      this.obschange.subscribe(this.getData);
    }
  }

  getData = (data)=>{
    this.results = data[0];
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email : string;
  results :any;
  obsForgot : Observable<object>;

  constructor(private auth : AuthService) { }
  submit(email :HTMLInputElement){
    this.email = email.value;

    this.obsForgot = this.auth.forgotPsw(this.email);
    this.obsForgot.subscribe(this.getData);
  }

  getData = (data)=>{
    this.results = data[0];
    console.log(this.results);
  }

  ngOnInit(): void {

  }

}

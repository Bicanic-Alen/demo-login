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
  t : string[] = [];
  cod :string;
  results :any;
  obsForgot : Observable<object>;

  constructor(private auth : AuthService) { }
  submit(email :HTMLInputElement){
    this.email = email.value;
    var pop = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i<5; i++){
      this.t.push(pop.charAt(Math.floor(Math.random() * pop.length)));
    }
    this.cod = this.t.join('');
    this.obsForgot = this.auth.forgotPsw(this.email, this.cod);
    this.obsForgot.subscribe(this.getData);
  }

  getData = (data)=>{
    this.results = data[0];
    console.log(this.results);
  }

  ngOnInit(): void {

  }

}

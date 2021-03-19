import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
  obsLogin: Observable<Object>;
  results: any;
  isAuthorized: boolean;


  constructor(public auth : AuthService, private router: Router) {
   }

  submit(email :HTMLInputElement, pass : HTMLInputElement){
    this.email = email.value;
    this.pass = pass.value;
    this.obsLogin = this.auth.loginUtente(this.email, this.pass);
    this.obsLogin.subscribe(this.getData);


    if (this.results != undefined)
    {
      this.isAuthorized = true;
    }
  }

  getData = (data)=>{
    this.results = data[0];
    console.log(this.results);
  }

  ngOnInit(): void {

  }




  logout()
  {
    this.results = undefined;
    this.isAuthorized = false;
  }



}

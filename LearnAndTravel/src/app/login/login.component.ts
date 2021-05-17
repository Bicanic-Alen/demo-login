import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RecoverpassService } from '../recoverpass.service';
import {Md5} from "md5-typescript";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
  obsLogin: Observable<Object>;
  results: any = undefined;
  isAuthorized: boolean;
  pswErr : string;


  constructor(private auth : AuthService, private router: Router, private user : UserService, private recover : RecoverpassService) {
   }

    //invia i dati al server con utente e password
  submit(email :HTMLInputElement, pass : HTMLInputElement){
    this.email = email.value;
    this.pass = Md5.init(pass.value);
    this.obsLogin = this.auth.loginUtente(this.email, this.pass);
    //riceve i dati dal server
    this.obsLogin.subscribe(this.getData);
    this.recover.newEmail(this.email);

  }

  getData = (data)=>{
    this.results = data[0];
    //riempio il servezio user con object del risultato preso dal server
    if (this.results != undefined){
      this.user.newUser(this.results);
      this.router.navigate(['/map-search']);
    }
    else{
      this.pswErr = "password o nome utente errato";
    }

  }

  ngOnInit(): void {
    this.user.shareduserInfo.subscribe(message => this.results = message);
    if (this.results != undefined)
    {
      this.isAuthorized = true;
    }

  }




  logout()
  {
    this.results = undefined;
    this.user.newUser(undefined);
    this.isAuthorized = false;
  }



}

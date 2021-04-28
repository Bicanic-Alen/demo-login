import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RecoverpassService } from '../recoverpass.service';

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


  constructor(private auth : AuthService, private router: Router, private user : UserService, private recover : RecoverpassService) {
   }

  submit(email :HTMLInputElement, pass : HTMLInputElement){
    this.email = email.value;
    this.pass = pass.value;
    this.obsLogin = this.auth.loginUtente(this.email, this.pass);
    this.obsLogin.subscribe(this.getData);

    this.recover.newEmail(this.email);

  }

  getData = (data)=>{
    this.results = data[0];
    this.user.newUser(this.results);
    console.log(this.results)
  }

  ngOnInit(): void {
    this.user.shareduserInfo.subscribe(message => this.results = message)
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

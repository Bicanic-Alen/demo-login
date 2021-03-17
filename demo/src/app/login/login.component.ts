import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

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

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  submit(email :HTMLInputElement, pass : HTMLInputElement){
    this.email = email.value;
    this.obsLogin = this.auth.loginUtente(this.email, this.pass);
    this.obsLogin.subscribe(this.results);
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nome: string;
  cognome : string;
  email : string;
  pass : string;
  obsReg : Observable<Object>;
  results : any;
  operazione = undefined;


  constructor(private auth : AuthService, private router: Router, private user : UserService) {
  }
  submit(nome: HTMLInputElement, cognome: HTMLInputElement, email :HTMLInputElement, pass : HTMLInputElement){
    this.email = email.value;
    this.pass = pass.value;
    this.obsReg = this.auth.loginUtente(this.email, this.pass);
    this.obsReg.subscribe(this.getData);
  }

  getData = (data)=>{
    this.results = data[0];
    if (this.results == true ){
      this.operazione = "registrazione avvenuta con successo";
    }
  }

  ngOnInit(): void {
  }

}

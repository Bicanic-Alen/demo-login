import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import {Md5} from "md5-typescript";

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
    this.pass = Md5.init(pass.value);
    this.nome = nome.value;
    this.cognome = cognome.value;
    this.obsReg = this.auth.signup(this.nome, this.cognome,this.email, this.pass);
    this.obsReg.subscribe(this.getData);
  }

  getData = (data)=>{
    this.results = data[0];
  }

  ngOnInit(): void {
  }

}

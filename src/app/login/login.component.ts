import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  title = 'login';	
  readonly apiURL : string;
  public rota: Router;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-travel.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
  }

  login(user: User) {
    console.log(user)
    this.http.post(`${this.apiURL}/login`, user)
      .subscribe(result => {
        console.log(result);
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        console.log(window.localStorage.getItem('currentUser'));
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit() {
    this.login(this.profileForm.value);
  }

}

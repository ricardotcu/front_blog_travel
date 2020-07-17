import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';	
  readonly apiURL : string;
  public rota: Router;
  public resumo: any;
  public session: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-travel.herokuapp.com';
    this.rota = r;
  }


  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)
    console.log(this.session.length)
    if (this.session) {
      console.log('session nao nula')
    }

    this.http.get(`${this.apiURL}/home`)
      .subscribe(result => {
        this.resumo = result;
        console.log(this.resumo)
      });
  }

}

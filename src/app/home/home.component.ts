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

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-travel.herokuapp.com';
    this.rota = r;
  }


  ngOnInit(): void {
    this.http.get(`${this.apiURL}/`)
      .subscribe(result => {
        this.resumo = result;
        console.log(this.resumo)
      });
  }

}

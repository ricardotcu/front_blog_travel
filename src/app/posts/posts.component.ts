import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'home';	
  readonly apiURL : string;
  public rota: Router;
  public post: any;
  public id_post: any;

  @Input()
  public session: any;

  constructor(private route: ActivatedRoute, private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-travel.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)

    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id_post = parametros['id']
      }
    });

    this.http.get(`${this.apiURL}/post/${this.id_post}`)
      .subscribe(result => {
        this.post = [result];
        console.log(this.post);
      });
  }

  logout() {
    window.localStorage.clear();
  }

}

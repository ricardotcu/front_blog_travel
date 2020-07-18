import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public session: any;

  constructor() { }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
  }

  logout() {
    window.localStorage.clear();
  }

}

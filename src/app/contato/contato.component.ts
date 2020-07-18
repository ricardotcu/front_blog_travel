import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public session: any;

  constructor() { }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
  }

  logout() {
    window.localStorage.clear();
  }

}

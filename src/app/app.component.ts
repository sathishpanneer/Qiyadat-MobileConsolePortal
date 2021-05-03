import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LanguageComponent } from './language/language.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UAEGLP';
  router: string;
  constructor(private _router: Router){

    this.router = _router.url;
  }

  ngOnInit(){

  }

  hasRoute(route: string) {
    return this._router.url.includes(route);
  }
}

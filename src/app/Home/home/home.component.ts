import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {MultilevelNodes} from 'ng-material-multilevel-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //routes = routes;
  navItems: MultilevelNodes[] = [
    {label: 'Globalization', link: '/language', icon: 'language'},
    {label: 'App configuration settings', link: '/appSetting', icon: 'app_settings_alt'},
    {label: 'System Notification', link: '/systemNotification', icon: 'notifications'},
    {label: 'CV Parsing', link: '/cvparsing', icon: 'subject'}
  ];
  router: string;
  routerLang: string;
  routerAppSetting: string;
  routerNotification: string;
  constructor(private _router: Router) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this._router.navigate(['login']);
    //   return;
    // }
  }

  selectedItem($event) {
    console.log($event);
  }

  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  Logout(){
      
      window.localStorage.removeItem('token');
      this._router.navigate(['login']);
      console.log("Logged out");

    }
}

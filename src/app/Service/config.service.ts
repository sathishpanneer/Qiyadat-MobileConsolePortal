import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AppConfig{
  baseUrl:string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
appConfig : AppConfig
setConfig(): Promise<AppConfig> {
  return this.http
    .get<AppConfig>('./app-config.json')
    .toPromise()
    .then(config => this.appConfig = config);
}

readConfig(): AppConfig {
  return this.appConfig;
}
}

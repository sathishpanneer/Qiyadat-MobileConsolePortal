import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSetting } from '../Home/app-setting/app-setting.component';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AppSettingService {

  apiUrl = environment.apiUrl.appSettingApi;

  constructor(private http: HttpClient, private configService : ConfigService) { }

  public getAllAppSetting(): Observable<any>{
    return this.http.get<any>(this.configService.appConfig.baseUrl + this.apiUrl);
  }

  public createAppSetting(data : appSetting){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'insert-entries', data);
  }

  public updateAppSetting(data: appSetting){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'update', data);
  }

  public deleteAppSetting(key: string){
    return this.http.delete(this.configService.appConfig.baseUrl + this.apiUrl + 'delete-appSetting/' + key);
  }
}

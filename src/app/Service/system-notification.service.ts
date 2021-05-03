import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages, Notifications } from '../Home/system-notification/system-notification.component';
import { AuthorizationService } from './authorization.service';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class SystemNotificationService {

  apiUrl = environment.apiUrl.systemNotificationApi;
  

  constructor(private http: HttpClient, private authService: AuthorizationService, private configService : ConfigService) { }

  public sendNotification(data: any){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'system-notification', data);
  }

  public CVParsing(data: any){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'cv-parsing', data);
  }

}

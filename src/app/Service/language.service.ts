import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localization, pageModel } from '../Home/language/language.component';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  apiUrl = environment.apiUrl.languageApi;
  
  constructor(private http: HttpClient, private configService : ConfigService) {}

  public getAllLocalization(): Observable<any>{
    return this.http.get<any>(this.configService.appConfig.baseUrl + this.apiUrl + 'get-label-portal');
  }

  public createLocalization(data : pageModel){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'save-label', data);
  }

  public updateLocalization(data: localization){
    return this.http.post(this.configService.appConfig.baseUrl + this.apiUrl + 'update-label', data);
  }

  public deleteLocalization(id: number){
    return this.http.delete(this.configService.appConfig.baseUrl + this.apiUrl + 'delete-label/' + id);
  }
}

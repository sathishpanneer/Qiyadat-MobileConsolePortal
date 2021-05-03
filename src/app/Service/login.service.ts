import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Login/login/login.component';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  apiUrl = environment.apiUrl.loginApi;

  constructor(private http: HttpClient, private configService : ConfigService) { }

  public login(data): Observable<login>{
    return this.http.post<login>(this.configService.appConfig.baseUrl + this.apiUrl + 'Login', data);
  }

}

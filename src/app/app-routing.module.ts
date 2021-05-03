import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSettingComponent } from './Home/app-setting/app-setting.component';
import { CvParsingComponent } from './Home/cv-parsing/cv-parsing/cv-parsing.component';
import { HomeComponent } from './Home/home/home.component';
import { LanguageComponent } from './Home/language/language.component';
import { SystemNotificationComponent } from './Home/system-notification/system-notification.component';
import { WelcomeComponent } from './Home/welcome/welcome/welcome.component';
import { LoginComponent } from './Login/login/login.component';
import { PageNotfoundComponent } from './NotFound/notfound/pagenotfound.component';
import { AuthGuardService } from './Service/auth-guard.service';
import { AuthorizationService } from './Service/authorization.service';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate : [AuthGuardService]},
  { path: 'language', component: LanguageComponent, canActivate : [AuthGuardService] },
  { path: 'appSetting', component: AppSettingComponent, canActivate : [AuthGuardService] },
  { path: 'systemNotification', component: SystemNotificationComponent, canActivate : [AuthGuardService] },
  { path: 'cvparsing', component: CvParsingComponent, canActivate : [AuthGuardService] },
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

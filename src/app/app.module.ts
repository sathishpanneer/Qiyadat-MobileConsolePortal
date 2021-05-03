import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';
import { MatCardModule, MatTabsModule, MatTableModule, MatProgressBarModule, matTooltipAnimations } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { NgMaterialMultilevelMenuModule } from './../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.module';
import { LanguageComponent } from './Home/language/language.component';
import { AppSettingComponent } from './Home/app-setting/app-setting.component';
import { SystemNotificationComponent } from './Home/system-notification/system-notification.component';
import { AddLangugaeComponent } from './Home/language/add-langugae/add-langugae.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditLangugaeComponent } from './Home/language/edit-langugae/edit-langugae.component';
import { DeleteLangugaeComponent } from './Home/language/delete-langugae/delete-langugae.component';
import { AddAppSettingComponent } from './Home/app-setting/add-app-setting/add-app-setting.component';
import { EditAppSettingComponent } from './Home/app-setting/edit-app-setting/edit-app-setting.component';
import { DeleteAppSettingComponent } from './Home/app-setting/delete-app-setting/delete-app-setting.component';
import { WelcomeComponent } from './Home/welcome/welcome/welcome.component';
import { AppSettingService } from './Service/app-setting.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './Service/Authorization.interceptor';
import { LanguageService } from './Service/language.service';
import { SystemNotificationService } from './Service/system-notification.service';
import { LoginService } from './Service/login.service';
import { AuthorizationService } from './Service/authorization.service';
import { MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MultilevelMenuService } from 'ng-material-multilevel-menu/lib/multilevel-menu.service';
import { CvParsingComponent } from './Home/cv-parsing/cv-parsing/cv-parsing.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AuthGuardService } from './Service/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PageNotfoundComponent } from './NotFound/notfound/pagenotfound.component';
import { ConfigService } from './Service/config.service';
//import { LanguageModule} from './language/language.module';



const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.setConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LanguageComponent,
    AppSettingComponent,
    SystemNotificationComponent,
    AddLangugaeComponent,
    EditLangugaeComponent,
    DeleteLangugaeComponent,
    AddAppSettingComponent,
    EditAppSettingComponent,
    DeleteAppSettingComponent,
    WelcomeComponent,
    CvParsingComponent,
    PageNotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    NgMaterialMultilevelMenuModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule, 
    BrowserAnimationsModule,
    NgxSpinnerModule
    //LanguageModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    NgMaterialMultilevelMenuModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AddLangugaeComponent,
    EditLangugaeComponent,
    DeleteLangugaeComponent,
    AddAppSettingComponent,
    EditAppSettingComponent,
    DeleteAppSettingComponent
  ],
  providers: [
    AppSettingService,
    LanguageService,
    SystemNotificationService,
    LoginService,
    AuthorizationService,
    NgxSpinnerService,
    AuthGuardService,
    JwtHelperService,
    { 
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    ConfigService,{
      provide: APP_INITIALIZER,
      //useFactory: (setting: ConfigService) => function() {return setting.getSetting()},
      useFactory: appInitializerFn,
      deps: [ConfigService],
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

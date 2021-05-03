import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import { LoginService } from 'src/app/Service/login.service';

export interface login {
  message: string,
  success: boolean,
  token: string,
  isAuthorized : boolean,
  expireMinutes: number,
  userDetails: userDetails
}

export interface userDetails {
  hasAdminRights: boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if(window.localStorage.getItem('token')) {
      this.router.navigate(['welcome']);
      return;
    }
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getUsernameErrorMessage() {
    return this.formControl.hasError('required') ? 'Please enter your Username' :
        '';
  }

  getPasswordErrorMessage() {
    return this.formControl.hasError('required') ? 'Please enter your Password' :
        '';
  }

  Login(data: login) {
    this.isLoading = true;
    this.loginService.login(data).subscribe(data => {
      if (data.message == "200" && data.userDetails.hasAdminRights) {
        this.isLoading = false;
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['welcome'])
      } else if (data.message == "200" && !data.userDetails.hasAdminRights) {
        this.isLoading = false;
        this.snackBar.open("You do not have Admin rights to access the Console Application", "", {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['snack-bar']
        });
      }
      else {
        this.isLoading = false;
        this.snackBar.open("Invalid Username or Password", "", {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snack-bar']
        });
        console.log("Invalid Username/Password");
      }

    });

  }

}

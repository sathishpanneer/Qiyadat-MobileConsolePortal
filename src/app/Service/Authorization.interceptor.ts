import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';


@Injectable()

export class AuthorizationInterceptor implements HttpInterceptor{

    constructor(private authService: AuthorizationService, private _router: Router){ }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
        setHeaders: {
            Authorization: 'Bearer ' + this.authService.getToken(),
            
        }
    });

    return next.handle(request).pipe(catchError(x=> this.handleAuthError(x)));
    //return next.handle(request);
}

private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        if(window.localStorage.getItem('token')) {
            window.localStorage.removeItem('token');
            this._router.navigate(['login']);
          } else {
            this._router.navigate(['login']);
          }
        
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return of(err.message); // or EMPTY may be appropriate here
    }
    return throwError(err);
}

}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  errorMessage:string = "";
    constructor(
      private loaderService: LoaderService,
      private router: Router,
      private notification:NotificationService) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show()
        
        return next.handle(request).pipe(tap(evt => {
            // custom api errors
            if (evt instanceof HttpResponse) {
              this.loaderService.hide()
              if (evt.body.error == true) {
                this.errorMessage = evt.body.message ;
                this.notification.publishMessages(this.errorMessage, 'danger')
              }
            }
          }), 

          catchError((error: HttpErrorResponse) => {
            this.loaderService.hide();
            // console.log(error);

            if (error.error instanceof ErrorEvent) {
              //client-side error
              this.errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
             
              switch (error.status) {
                case 503: {
                  this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
                  this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
                case 500: {
                  this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
                  this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
                case 400: {
                  this.errorMessage = error.error.message;
                  if(error.error.error == "invalid_grant"){
                    this.notification.publishMessages(error.error['errorDescription'], 'danger')
                  }else{
                    this.notification.publishMessages(this.errorMessage, 'danger')
                  }
                  break;
                }
                case 404: {
                  this.errorMessage = error.error.message;
                    this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
                case 401: {
                  this.notification.publishMessages(error.error.message, 'danger')
                  this.router.navigate(["/"]);              
                  break;
                }
                case 403: {
                  this.errorMessage = error.error.message;
                  this.notification.publishMessages(error.error.message, 'danger')
                              
                  break;
                }
                case 405: {
                  this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
                    this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
                case 422:{
                  this.errorMessage = error.error.message;
                    this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
                case 0: {
                  this.errorMessage = 'A Connection Error Occured. Please Check Your Network Connection';
                  this.notification.publishMessages(this.errorMessage, 'danger')
                  break;
                }
              }
            }
    
            return throwError(error.error);
          })
        );
      }
}

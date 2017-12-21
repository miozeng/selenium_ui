import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LayoutComponent } from '../../layout/layout.component';
@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {
  public static loading: LayoutComponent;
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('processing request', request);
     MyHttpLogInterceptor.loading.open();
   // const customReq = request.clone({
   //   headers: request.headers.set('app-language', 'it')
    //});

    return next
      .handle(request)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
         if (ev.body != null &&ev.body.ret != null && ev.body.ret ==false) {
            alert(ev.body.msg);
          }
          MyHttpLogInterceptor.loading.close();
        }
         
      })
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
          MyHttpLogInterceptor.loading.close();
        }
        
        return Observable.throw(response);
      });
  }
}

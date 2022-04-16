import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('__todoListToken__');
    let requestWithToken = req.clone({
      headers:req.headers.set('Authorization',`Bearer ${token}`)
    })
    console.log(requestWithToken);
    return next.handle(requestWithToken);
  }
}

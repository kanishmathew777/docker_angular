import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Authservice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor { 

  constructor(private injector: Injector) { }
  intercept(req, next){ 
    let authservice = this.injector.get(Authservice)
    let tokenizedReq = req.clone(
      {
        setHeaders : {
          Authorization: `Token ${authservice.getToken()}`
        }}
    )
    return next.handle(tokenizedReq)
  }
}

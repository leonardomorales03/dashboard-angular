import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let newRequest: HttpRequest<any>;

    if ( req.url.includes("/smssolution/users/login")) {
      newRequest = req.clone({headers:req.headers 
        .set('Accept','application/json')
        .set('Access-Control-Allow-Methods','GET,HEAD,POST,PUT,DELETE,OPTIONS,PATCH')
        .set('Access-Control-Allow-Origin','*')
        });
    } else {
      newRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + 'aca va el token')
      });
    }

    return next.handle(newRequest); 

      


    
  }
}

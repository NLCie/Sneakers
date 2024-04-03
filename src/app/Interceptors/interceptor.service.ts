import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //ajout des headers personnalises a la requete
    const modifierReq = req.clone({
      headers: new HttpHeaders(
        {'X-Api-Key': 'wftifW30sprCPg6SKE8D9A==9PLSFO6z9PhFrEWZ',
          'content-type': 'application/json'
        })
    });
    return next.handle(modifierReq);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  urlBase : string = '';

  constructor(  private http: HttpClient,
                private Activeroute: ActivatedRoute,
                private router: Router) {

    this.urlBase = environment.server;   
  }


  login(user: string, psw: string):Observable<any>{ 
    return this.http.post('http://localhost:8181/smssolution/users/login', {user, psw});
  }







}

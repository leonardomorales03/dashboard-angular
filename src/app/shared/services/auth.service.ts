import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { AppComponent } from "src/app/app.component";
//import { Observable } from '../utilities/';

@Injectable()
export class AuthService {
  urlBase: string = "";

  constructor(
    private http: HttpClient,
    private Activeroute: ActivatedRoute,
    private router: Router
  ) {
    this.urlBase = environment.server;
  }

  login(user: string, psw: string): Observable<any> {
    return this.http.post("/smssolution/users/login", {
      username: user,
      password: psw,
    });
    //return this.http.post('http://localhost:8181/smssolution/users/login', {user, psw});
    //return this.http.get('assets/data/data-login.json');
  }

  logout() {
    this.router.navigate(["/login"]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ParameterService {

  constructor(  private http: HttpClient,
                private router: Router,) { }



  listTypeParameter():Observable<any>{
    //return this.http.get('http://localhost:8181/smssolution/type-parameter');
    return this.http.get('assets/data/data-list-type.json');
  }

  listParameter(id: string):Observable<any>{
    console.log('se recibe id parameter en el servicio', id);
    //return this.http.get('http://localhost:8181/smssolution//parameter?type_id=' + id);
    return this.http.get('assets/data/data-list-parameters.json');
  }






}

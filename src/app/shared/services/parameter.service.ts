import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CampaniaDetalle } from '../models/campania-detalle';
import { SendMessage } from '../models/send-message';
import { UserDetalle } from '../models/user-detalle.mdel';

@Injectable()
export class ParameterService {

  constructor(  private http: HttpClient,
                private router: Router,) { }



  listTypeParameter():Observable<any>{
    return this.http.get('/smssolution/type-parameter');
    //return this.http.get('assets/data/data-list-type.json');
  }

  listParameter(id: string):Observable<any>{
    console.log('se recibe id parameter en el servicio', id);
    return this.http.get('/smssolution//parameter?type_id=' + id);
    //return this.http.get('assets/data/data-list-parameters.json');
  }

  listUser():Observable<any>{
    return this.http.get('/smssolution/users');
    //return this.http.get('assets/data/data-list-user.json');
  }

  setUser(user: UserDetalle):Observable<any>{
    return this.http.post('/smssolution/users', user);
  }

  getListCampaign():Observable<any>{
    return this.http.get('/smssolution/campaign');
  }

  insertCampaign(camp: CampaniaDetalle):Observable<any>{
    return this.http.post('/smssolution/campaign/insert', camp);
  }

  getCampign(id: string):Observable<any>{
    return this.http.get('/smssolution/campaignParameter?idCampaign=' + id);
  }

  sendMessage(msg: SendMessage):Observable<any>{
    return this.http.post('/smssolution/message/publish', msg);
  }
    






}

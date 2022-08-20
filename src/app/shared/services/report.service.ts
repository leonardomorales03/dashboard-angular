import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getIndividualLog(number_phone): Observable<any> {
    return this.http.get(`/smssolution/logphone?phone=${number_phone}`);
  }
}

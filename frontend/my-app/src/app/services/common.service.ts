import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { auth } from '../authentication/authen';
@Injectable({
  providedIn: 'root'
})
export class CommonService{
  constructor(private http: HttpClient){}
  host = 'http://localhost:3000/';
  token: any;
  post(service: any, data: any,  token: any, permission?: any): Observable<any>{
    const header = new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization": auth + token
    })
    return this.http.post(this.host + service, data, {
       headers: header
    });
  }
}

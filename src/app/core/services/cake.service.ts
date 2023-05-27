import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  baseURL: string = "https://protouch-backend.vercel.app/api/v1/";

  constructor(
    private http: HttpClient
  ) { }

  cakeContactUs(payload: {name: string; email: string; message: string; subject: string}): Observable<any>{
    return this.http.post(`${this.baseURL}cake/contact`, payload)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  cakeContactUs(payload: {name: string; email: string; message: string; subject: string}): Observable<any>{
    return this.http.post(`${this.baseURL}cake/contact`, payload)
  }
}

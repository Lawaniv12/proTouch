import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseURL: string = "https://protouch-backend.vercel.app/api/v1/";

  constructor(
    private http: HttpClient
  ) { }

  hotelContactUs(payload: {name: string; email: string; message: string; subject: string}): Observable<any>{
    return this.http.post(`${this.baseURL}hotel/contact`, payload)
  }
}

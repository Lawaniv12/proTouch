import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseURL = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  hotelContactUs(payload: {name: string; email: string; message: string; subject: string}): Observable<any>{
    return this.http.post(`${this.baseURL}hotel/contact`, payload)
  }
}

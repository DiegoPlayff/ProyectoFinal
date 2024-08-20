import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = "http://localhost:9000/api/about/";

  constructor(
    private http: HttpClient
  ) { }

  getAbout(){
    return this.http.get(this.url);
  }

  createAndEditAbout(about: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    })
    return this.http.post(this.url, about, { headers })
  }

}

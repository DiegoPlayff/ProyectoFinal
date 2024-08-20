import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = "http://localhost:9000/api/hero/";

  constructor(
    private http: HttpClient
  ) { }

  getHero(){
    return this.http.get(this.url);
  }

  createAndEditHero(hero: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    })
    return this.http.post(this.url, hero, { headers })
  }
}

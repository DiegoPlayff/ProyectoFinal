import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  url = "http://localhost:9000/api/";
  constructor(private http: HttpClient) { }

  getLugares() {
    return this.http.get(this.url + "lugares")
  }

  createLugar(lugar: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });

    const body = JSON.stringify(lugar);
    return this.http.post(this.url + "lugares", body, { headers });
  }

  deleteLugar(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.delete(this.url + "lugares/" + id, { headers });
  }

  editLugar(id: any, lugar: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    const body = JSON.stringify(lugar);
    return this.http.put(this.url + "lugares/" + id, body, { headers });
  }

  getLugar(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.get(this.url + "lugares/" + id, { headers });
  }

}

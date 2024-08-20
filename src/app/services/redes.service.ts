import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  url = "http://localhost:9000/api/";
  constructor(private http: HttpClient) { }

  getRedes() {
    return this.http.get(this.url + "redes")
  }

  createRedes(redes: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });

    const body = JSON.stringify(redes);
    return this.http.post(this.url + "redes", body, { headers });
  }

  deleteRedes(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.delete(this.url + "redes/" + id, { headers });
  }

  editRedes(id: any, redes: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    const body = JSON.stringify(redes);
    return this.http.put(this.url + "redes/" + id, body, { headers });
  }

  getRedesById(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.get(this.url + "redes/" + id, { headers });
  }
}

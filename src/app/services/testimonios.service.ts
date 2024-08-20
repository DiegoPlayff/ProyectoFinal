import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  url = "http://localhost:9000/api/";
  constructor(private http: HttpClient) { }

  getTestimonios() {
    return this.http.get(this.url + "testimonios")
  }

  createtestimonio(testimonio: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });

    const body = JSON.stringify(testimonio);
    return this.http.post(this.url + "testimonios", body, { headers });
  }

  deletetestimonio(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.delete(this.url + "testimonios/" + id, { headers });
  }

  edittestimonio(id: any, testimonio: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    const body = JSON.stringify(testimonio);
    return this.http.put(this.url + "testimonios/" + id, body, { headers });
  }

  gettestimonio(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
    return this.http.get(this.url + "testimonios/" + id, { headers });
  }
}

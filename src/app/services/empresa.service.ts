import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = "http://localhost:9000/api/empresa/";

  constructor(
    private http: HttpClient
  ) { }

  getEmpresa(){
    return this.http.get(this.url);
  }

  createAndEditEmpresa(empresa: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    })
    return this.http.post(this.url, empresa, { headers })
  }
}

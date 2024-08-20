import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = "http://localhost:9000/api/";
  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(this.url + "login", data)
  }

  register(data:any){
    return this.http.post(this.url + "users", data)
  }

  logout(){
    return this.http.delete(this.url + "logout")
  }

}

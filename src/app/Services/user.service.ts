import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  GetUser(email : any, token : any){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`,
    });
    return this.http.get("http://localhost:8089/user/getByEmail/"+ email, {headers});
  }

  getAllUsers(token : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/getallExAdmin', {headers})
  }
}

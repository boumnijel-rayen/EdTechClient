import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  signUp(user:any){
    return this.http.post('http://localhost:8089/api/auth/register', user);
  }

  signIn(email : string, password : string){
    let body = {
      email : email,
      password : password
    }
    return this.http.post('http://localhost:8089/api/auth/login', body)
  }
}

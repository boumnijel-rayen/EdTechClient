import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './../models/Utilisateur';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient, private auth : AuthServiceService) { }
  getUsers() : Observable<Utilisateur[]>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Utilisateur[]>("http://localhost:8089/user/getall",{headers});
  }
  FindUserByMail(mail: string): Observable<Utilisateur> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken());
    const url = `http://localhost:8089/user/GetMail/${mail}`;
    return this.http.get<Utilisateur>(url, { headers });
  }
}

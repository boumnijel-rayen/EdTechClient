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

  updateUser(token : any, user : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.put('http://localhost:8089/user/update', user, {headers})
  }

  archiver(token : any, id :any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/archiver/' + id, {headers})
  }

  activer(token : any, id : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/activer/' + id, {headers})
  }

  userStatus(token: any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/stats/userStatus', {headers})
  }

  validationsStats(token : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/stats/validStats', {headers})
  }

  creationStats(token : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/stats/createStats', {headers})
  }
}

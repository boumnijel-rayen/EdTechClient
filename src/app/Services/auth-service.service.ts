import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient, private cookieService: CookieService) { }

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

  confirm(email : string, token : string){
    return this.http.get('http://localhost:8089/api/auth/activate/'+ token + '/' + email);
  }

  getAllUsers(token : any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8089/user/getall', {headers})
  }

  setToken(token: string): void {
    const options = {
      expires: 1, // 1 day expiration
      secure: true,
      sameSite: 'Strict' as 'Strict' | 'Lax' | 'None',
      path: '/',
      // HttpOnly is not directly supported by JavaScript as it's a flag that needs to be set server-side
    };

    this.cookieService.set('auth_token', token, options);
  }

  getToken(): string {
    return this.cookieService.get('auth_token');
  }

  deleteToken(): void {
    this.cookieService.delete('auth_token', '/');
  }

  setEmail(email: string): void {
    const options = {
      expires: 1, // 1 day expiration
      secure: true,
      sameSite: 'Strict' as 'Strict' | 'Lax' | 'None',
      path: '/',
      // HttpOnly is not directly supported by JavaScript as it's a flag that needs to be set server-side
    };

    this.cookieService.set('email_connected', email, options);
  }

  getEmail(): string {
    return this.cookieService.get('email_connected');
  }

  deleteEmail(): void {
    this.cookieService.delete('email_connected', '/');
  }

  sendToken():any{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return headers;
  }

}

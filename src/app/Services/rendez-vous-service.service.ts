import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../Models/RendezVous';
import { Utilisateur } from '../Models/Utilisateur';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RendezVousServiceService {

  constructor(private http : HttpClient, private auth : AuthServiceService) { }
  private apiUrl = 'http://localhost:8089/rdv';
  private apiUrl2 = 'http://localhost:8089/user';

  getAllRendezVous(): Observable<RendezVous[]> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<RendezVous[]>(`${this.apiUrl}/getall`,{headers});
  }
  addRendezVous(rendezVous: any): Observable<any>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    console.log('Adding RendezVous:', rendezVous);
    return this.http.post(`${this.apiUrl}/save`, rendezVous,{headers});
}

updateRendezVous(rendezVous: any): Observable<void> {
  const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    console.log('Updating RendezVous:', rendezVous);
    return this.http.put<void>(`${this.apiUrl}/update`, rendezVous,{headers});
}

  deleteRendezVous(id: number): Observable<void> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`,{headers});
  }
  getAllStudents(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl2}/getallstudents`);
  }

  getAllEnseignants(): Observable<Utilisateur[]> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Utilisateur[]>(`${this.apiUrl2}/getallenseignants`,{headers});
  }
  getRendezVousCountByStatus(): Observable<any> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<any>(`${this.apiUrl}/rendezvous/status-count`,{headers});
  }
  getTotalRendezVousCount(): Observable<number> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<number>(`${this.apiUrl}/rendezvous/total-count`,{headers});
}
}

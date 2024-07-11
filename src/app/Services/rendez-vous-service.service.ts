import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/RendezVous';
import { Utilisateur } from '../models/Utilisateur';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RendezVousServiceService {

  constructor(private http : HttpClient, private auth : AuthServiceService) { }
  private apiUrl = 'http://localhost:8089/rdv';
  private apiUrl2 = 'http://localhost:8089/user';

  getAllRendezVous(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.apiUrl}/getall`);
  }
  addRendezVous(rendezVous: any): Observable<any>{
    console.log('Adding RendezVous:', rendezVous);
    return this.http.post(`${this.apiUrl}/save`, rendezVous);
}

updateRendezVous(rendezVous: any): Observable<void> {
    console.log('Updating RendezVous:', rendezVous);
    return this.http.put<void>(`${this.apiUrl}/update`, rendezVous);
}

  deleteRendezVous(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getAllStudents(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl2}/getallstudents`);
  }

  getAllEnseignants(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl2}/getallenseignants`);
  }
}

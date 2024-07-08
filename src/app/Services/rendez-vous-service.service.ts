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
    return this.http.get<RendezVous[]>(`${this.apiUrl}/getall`);
  }

  addRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.apiUrl}/save`, rendezVous);
  }

  updateRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
    return this.http.put<RendezVous>(`${this.apiUrl}/update`, rendezVous);
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

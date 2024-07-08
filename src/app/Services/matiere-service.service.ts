import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../models/Matiere';
@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  private apiUrl = 'http://localhost:8089/api/matieres';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.apiUrl);
  }

  getMatiereById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.apiUrl}/${id}`);
  }

  createMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(this.apiUrl, matiere, this.httpOptions);
  }

  updateMatiere(id: number, matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>(`${this.apiUrl}/update/${id}`, matiere, this.httpOptions);
  }

  deleteMatiere(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}

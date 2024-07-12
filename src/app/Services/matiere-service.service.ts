import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../models/Matiere';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {




  private apiUrl = 'http://localhost:8089/api/matieres';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private auth:AuthServiceService) { }

  getAllMatieres(): Observable<Matiere[]> {
   const headers=this.auth.sendToken();
   console.log(this.auth.getToken());
    return this.http.get<Matiere[]>(this.apiUrl,{headers});
  }

  getMatiereById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.apiUrl}/${id}`);
  }

  createMatiere(matiere: Matiere): Observable<Matiere> {
    const headers=this.auth.sendToken();
    return this.http.post<Matiere>(this.apiUrl, matiere, {headers});
  }

  updateMatiere(id: number, matiere: Matiere): Observable<Matiere> {
    const headers=this.auth.sendToken();

    return this.http.put<Matiere>(`${this.apiUrl}/update/${id}`, matiere,{headers});
  }

  deleteMatiere(id: number): Observable<void> {
    const headers=this.auth.sendToken();

    return this.http.delete<void>(`${this.apiUrl}/${id}`,{headers});
  }
}

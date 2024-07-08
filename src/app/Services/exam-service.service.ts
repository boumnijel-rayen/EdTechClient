import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/Examen';
@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  private baseUrl = 'http://localhost:8089/api/exams';

  constructor(private http: HttpClient) { }

  getExamsByMatiere(matiereId: number): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${this.baseUrl}/matiere/${matiereId}`);
  }
}

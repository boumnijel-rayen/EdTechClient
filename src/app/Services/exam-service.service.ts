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

  

  updateExam(id: number, examen: Examen): Observable<Examen> {  // Assurez-vous d'utiliser ExamenKey correctement
    return this.http.put<Examen>(`${this.baseUrl}/${id}`, examen);
  }

  uploadWork(examId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/${examId}/upload`, formData);
  }
}

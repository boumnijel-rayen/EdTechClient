import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient, private auth: AuthServiceService) {}

  getAllClasses(): Observable<any> {
    const headers = this.auth.sendToken();
    return this.http.get('http://localhost:8089/api/classes/all', { headers });
  }

  updateClasse(classid : any ,classe: any): Observable<any> {
    const headers = this.auth.sendToken();
    return this.http.put(`http://localhost:8089/api/classes/update/${classid}`, classe, { headers });
  }

  addClasse(classe: any): Observable<any> {
    const headers = this.auth.sendToken();
    return this.http.post('http://localhost:8089/api/classes', classe, { headers });
  }

  deleteClasse(id: any): Observable<any> {
   
    return this.http.delete(`http://localhost:8089/api/classes/`+ id);
  }

  addStudentToClass(email: string, classId: number): Observable<any> {  
    const headers = this.auth.sendToken();
    const url = `http://localhost:8089/api/classes/${classId}/add-etudiant/${email}`;
    return this.http.put(url, null, { headers });
  }

  removeStudentFromClass(email: string, classId: number): Observable<any> {
    const headers = this.auth.sendToken();
    const url = `http://localhost:8089/api/classes/${classId}/remove-etudiant/${email}`;
    return this.http.put(url, null, { headers });
  }
}

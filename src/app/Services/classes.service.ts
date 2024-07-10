import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  


  constructor(private http : HttpClient, private auth : AuthServiceService) { }

  getAllClasses(): Observable<any>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get('http://localhost:8089/api/classes/all')
  }

  updateClasse(classe : any): Observable<any>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.put('http://localhost:8089/api/classes/update',classe)
  }

  addClasse(classe : any): Observable<any>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.post('http://localhost:8089/api/classes/add',classe)
  }

  deleteClasse(id : any): Observable<any>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.delete('http://localhost:8089/api/classes/delete/'+id)
  } 

  addStudentToClass(email: string, classId: number): Observable<any> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())

    const url = `http://localhost:8089/api/classes/${classId}/add-etudiant/`;
    return this.http.put(url + email, null);
  }
  


}

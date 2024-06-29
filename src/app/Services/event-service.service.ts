import { Evenement } from './../Models/Evenement';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor(private http : HttpClient, private auth : AuthServiceService) { }

  ajouterEvent(event : any, token : any){
/*     const headers = new HttpHeaders({
      'Authorization': Bearer ${token},
    }); */
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`,
    });
    return this.http.post("http://localhost:8089/event/save",event,{headers});
  }
  getEvenements(event : any) : Observable<Evenement[]>{
    console.log();
    return this.http.get<Evenement[]>("http://localhost:8089/event/getall");
  }

}

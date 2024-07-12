import { Evenement } from '../models/evenement';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor(private http : HttpClient, private auth : AuthServiceService) { }

  ajouterEvent(event : any){
/*
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`,
    });*/
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.post("http://localhost:8089/event/save",event,{headers});
  }
  getEvenements() : Observable<Evenement[]>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Evenement[]>("http://localhost:8089/event/getall",{headers});
  }
  ajouteEquipeOrg(idEvent : any, utilisateurs:any){
    const headers = this.auth.sendToken();
    console.log(utilisateurs)
    console.log(idEvent)
    console.log(this.auth.getToken())
    return this.http.post("http://localhost:8089/event/addOrgTeam/"+idEvent,utilisateurs,{headers});
  }
  getEventById(id : number): Observable<Evenement>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Evenement>("http://localhost:8089/event/get/"+id,{headers});
  }

  getEquipeOrgByEventId(id:number):Observable<Utilisateur[]>{
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Utilisateur[]>("http://localhost:8089/event/getEquipeOrg/"+id,{headers});
  }



  modifierEvent(event : any){
    /*
        const headers = new HttpHeaders({
          'Authorization' : `Bearer ${token}`,
        });*/
        const headers = this.auth.sendToken();
        console.log(this.auth.getToken())
        return this.http.put("http://localhost:8089/event/update",event,{headers});
      }
      annulerEvent(idEvent : number){
            const headers = this.auth.sendToken();
            console.log(headers)
            console.log(idEvent)
            return this.http.put("http://localhost:8089/event/cancel/"+idEvent,{headers});
          }
      modifierEquipeOrg(idEvent : any, utilisateurs:any){
        const headers = this.auth.sendToken();
        console.log(this.auth.getToken())
        return this.http.put("http://localhost:8089/event/updateOrgTeam/"+idEvent,utilisateurs,{headers});
      }

}

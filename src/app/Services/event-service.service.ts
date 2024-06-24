import { AuthServiceService } from './auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor(private http : HttpClient, private auth : AuthServiceService) { }

  ajouterEvent(event : any, token : any){
    console.log();
    return this.http.post("http://localhost:8089/event/save",event)
  }

}

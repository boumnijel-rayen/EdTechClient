import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../Models/Menu';
import { Repas } from '../Models/Repas';  // Adjust the path as necessary
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurationServiceService {

  constructor(private http : HttpClient, private auth : AuthServiceService) { }
  ajouterRepas(repas : any){
    /*const headers = new HttpHeaders({
          'Authorization' : `Bearer ${token}`,
        });*/
        const headers = this.auth.sendToken();
        console.log(this.auth.getToken())
        return this.http.post("http://localhost:8089/repas/AddRepas",repas,{headers});
      }
  getRepas(): Observable<Repas[]> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.get<Repas[]>("http://localhost:8089/repas/all",{headers});
  }
  addMenu(menu: Menu): Observable<Menu> {
    const headers = this.auth.sendToken();
    console.log(this.auth.getToken())
    return this.http.post<Menu>("http://localhost:8089/menus/addmenu", menu,{headers});
  }
}

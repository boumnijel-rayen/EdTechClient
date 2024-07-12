import { UserService } from './../../Services/user.service';
import { DatePipe } from '@angular/common';
import { AuthServiceService } from '../../Services/auth-service.service';
import { EventServiceService } from '../../Services/event-service.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Evenement } from '../../models/evenement';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/Utilisateur';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent {
  events !: Evenement[];
  displayModifDialog!: boolean;
  constructor( private eventService : EventServiceService, private auth : AuthServiceService,private router: Router, private userService : UserService) {
    eventService.getEvenements().subscribe(
      (data : Evenement[]) => {
        console.log(data);
        this.events = data;
        console.log(this.events)
      }
    );
  }

  selectedId !: number;
  displayDialog: boolean = false;
  selectedCardContent!:string;
  titre!:string;
  dateDeb !: Date;
  dateFin !: Date;
  organisateurs !: Utilisateur[];
  isOrganisateur : boolean = false;
  connectedUser !:Utilisateur;
  showDialog(cardIndex: number) {
    this.selectedId = this.events[cardIndex].id;
    this.selectedCardContent = this.events[cardIndex].description;
    this.titre = this.events[cardIndex].nom;
    this.dateDeb = this.events[cardIndex].dateDeb;
    this.dateFin = this.events[cardIndex].dateFin;

    // Fetch organisateurs for the selected event
    this.eventService.getEquipeOrgByEventId(this.selectedId).subscribe((orgs: any) => {
      this.organisateurs = orgs;

      // Fetch connected user information
      this.userService.GetUser(this.auth.getEmail(), this.auth.getToken()).subscribe((data: any) => {
        this.connectedUser = data;

        // Check if the connected user is an organizer for this event
        if (this.organisateurs && this.connectedUser && this.organisateurExists(this.connectedUser.email)) {
          this.isOrganisateur = true;
        }

        // Display the dialog once all data dependencies are resolved
        this.displayDialog = true;
      });
    });
  }

  displayAjoutDialog: boolean = false;
  showAjout() {
    this.displayAjoutDialog = true;
  }
  onEventAdded(newEvent:any) {
    this.displayAjoutDialog = false; // Close the dialog when the event is emitted
    window.location.reload();
    }


  goModif(){
    this.router.navigate(['/app/modif-event/', this.selectedId]); // Programmatic navigation
  }

  annulerEvent(){
    console.log(this.selectedId)
    this.eventService.annulerEvent(this.selectedId).subscribe((data : any)=>
    {
      console.log(data);
    })
    //window.location.reload();
  }

  organisateurExists(email: string): boolean {
      return this.organisateurs.some(org => org.email === email);
  }


}

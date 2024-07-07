import { DatePipe } from '@angular/common';
import { AuthServiceService } from '../../Services/auth-service.service';
import { EventServiceService } from '../../Services/event-service.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/Evenement';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent {
  events !: Evenement[];
  displayModifDialog!: boolean;
  constructor( private eventService : EventServiceService, private auth : AuthServiceService,private router: Router) {
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
  date !: Date;
  showDialog(cardIndex: number) {
    console.log(cardIndex)
    this.selectedId = this.events[cardIndex].id;
    this.selectedCardContent=this.events[cardIndex].description;
    this.titre = this.events[cardIndex].nom;
    this.date =this.events[cardIndex].date;
    this.displayDialog = true;
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

}

import { DatePipe } from '@angular/common';
import { AuthServiceService } from '../../Services/auth-service.service';
import { EventServiceService } from '../../Services/event-service.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/Evenement';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
  providers: [DatePipe]
})
export class ListEventComponent {
  events !: Evenement[];
  datePipe: any;
  constructor( private eventService : EventServiceService, private auth : AuthServiceService) {
    eventService.getEvenements().subscribe(
      (data : Evenement[]) => {
        console.log(data);
        this.events = data;
        console.log(this.events)
      }
    );
  }

  cards = [
    { header: 'Nom evenement', subheader: '15-04-2001', content: 'Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' },
    { header: 'Nom evenement', subheader: '15-04-2001', content: 'Description' },
  ];

  displayDialog: boolean = false;
  selectedCardContent!:string;
  titre!:string;
  date !: Date;
  showDialog(cardIndex: number) {
    this.selectedCardContent=this.events[cardIndex].nom
    this.titre = this.events[cardIndex].description;
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

}

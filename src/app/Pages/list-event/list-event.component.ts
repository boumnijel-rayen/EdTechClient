import { Component } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  cards = [
    { header: 'Nom evenement', subheader: '15-04-2001', content: 'Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' },
    { header: 'Nom evenement', subheader: '15-04-2001', content: 'Description' },
  ];

  displayDialog: boolean = false;
  selectedCardContent: string = '';
  titre:string ='';
  date : string='';
  showDialog(cardIndex: number) {
    this.selectedCardContent=this.cards[cardIndex].content
    this.titre = this.cards[cardIndex].header;
    this.date =this.cards[cardIndex].subheader;
    this.displayDialog = true;
  }
}

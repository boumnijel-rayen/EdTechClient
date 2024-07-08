import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RendezVous } from '../../Models/RendezVous';
import { Utilisateur } from '../../Models/Utilisateur';
import { RendezVousServiceService } from '../../Services/rendez-vous-service.service';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrl: './list-rendez-vous.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ListRendezVousComponent implements OnInit{
  rendezVousList:RendezVous[] = [];
  displayedColumns: string[] = ['ID','Date', 'Start Time','End Time', 'Statut', 'Validateur', 'Etudiant'];
  dataSource = new MatTableDataSource<RendezVous>();
  selectedRendezvous: any[] = [];
  rendezVous: RendezVous = new RendezVous();
  displayDialog: boolean = false;
  dialogTitle: string = '';
  students: Utilisateur[] = [];
  enseignants: Utilisateur[] = [];
  selectedStudent: Utilisateur = new Utilisateur();
  selectedEnseignant: Utilisateur | null = null;
 // constructor(private rendezVousService: RendezVousServiceService) {}
  constructor(private rendezVousService: RendezVousServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.fetchRendezVous();
    this.fetchStudents();
    this.fetchEnseignants();
  }
  fetchStudents(): void {
    this.rendezVousService.getAllStudents().subscribe((data: Utilisateur[]) => {
      this.students = data;
    });
    console.log(this.students)

  }

  fetchEnseignants(): void {
    this.rendezVousService.getAllEnseignants().subscribe((data: Utilisateur[]) => {
      this.enseignants = data;
    });
    console.log(this.enseignants);
  }


  fetchRendezVous(): void {
    this.rendezVousService.getAllRendezVous().subscribe((data: RendezVous[]) => {
      this.rendezVousList = data;
    });
    
  }

  showAddDialog(): void {
    this.dialogTitle = 'Add Rendez-Vous';
    this.rendezVous = new RendezVous();
    this.displayDialog = true;
  }

  showEditDialog(rendezVous: RendezVous): void {
    this.dialogTitle = 'Edit Rendez-Vous';
    this.rendezVous = { ...rendezVous };
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  saveRendezVous(): void {
    if (this.rendezVous.id) {
      this.rendezVousService.updateRendezVous(this.rendezVous).subscribe(() => {
        this.fetchRendezVous();
        this.displayDialog = false;
      });
    } else {
      this.rendezVousService.addRendezVous(this.rendezVous).subscribe(() => {
        this.fetchRendezVous();
        this.displayDialog = false;
      });
    }
  }
  onCheckboxChange(rendezvous: any) { // Replace 'any' with your rendezvous type
    const index = this.selectedRendezvous.indexOf(rendezvous);
    if (index === -1) {
      this.selectedRendezvous.push(rendezvous);
    } else {
      this.selectedRendezvous.splice(index, 1);
    }
  }

  deleteRendezVous(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this rendez-vous?',
      accept: () => {
        this.rendezVousService.deleteRendezVous(id).subscribe(() => {
          this.fetchRendezVous();
        });
      }
    });
  }

  deleteSelectedRendezVous(): void {
    if (this.selectedRendezvous.length > 0) {
      const ids = this.selectedRendezvous.map(r => r.id);
      ids.forEach(id => this.deleteRendezVous(id));
      this.selectedRendezvous = [];
    }
  }
  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' {
    switch (status) {
      case 'EN_COURS':
        return 'info';
      case 'TERMINE':
        return 'success';
      case 'EN_ATTENTE':
        return 'warning';
        case 'CANCELED':
          return 'danger';
      default:
        return 'contrast';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RendezVous } from '../../models/RendezVous';
import { Utilisateur } from '../../models/Utilisateur';
import { RendezVousServiceService } from '../../Services/rendez-vous-service.service';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrl: './list-rendez-vous.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ListRendezVousComponent implements OnInit {
  rendezVousList: RendezVous[] = [];
  displayedColumns: string[] = ['ID', 'Date', 'Start Time', 'End Time', 'Statut', 'Validateur', 'Etudiant'];
  statusOptions: string[] = ['EN_COURS', 'TERMINE', 'EN_ATTENTE', 'CANCELED'];
  dataSource = new MatTableDataSource<RendezVous>();
  selectedRendezvous: any[] = [];
  rendezVous: RendezVous = new RendezVous();
  displayDialog: boolean = false;
  dialogTitle: string = '';
  students: Utilisateur[] = [];
  enseignants: Utilisateur[] = [];
  selectedStudent: Utilisateur = new Utilisateur();
  selectedEnseignant: Utilisateur | null = null;
  rendezVousForm: FormGroup;
  updateRdv: boolean = false;




  constructor(
    private fb: FormBuilder,
    private rendezVousService: RendezVousServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.rendezVousForm = this.fb.group({
      id: [{ value: 0, disabled: true }],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      //statut: ['', Validators.required],
      validateur: [null, Validators.required],
      etudiant: [null, Validators.required],
      statut: [null]
    });
  }

  ngOnInit(): void {
    this.fetchRendezVous();
    this.fetchStudents();
    this.fetchEnseignants();
  }

  isFormValid(): boolean {
    const now = new Date();
    const startTime = new Date(this.rendezVous.startTime);
    const endTime = new Date(this.rendezVous.endTime);

    if (!this.rendezVous.startTime || !this.rendezVous.endTime ||  !this.selectedStudent || !this.selectedEnseignant) {
      return false;
    }

    if (startTime < now || endTime < now || endTime <= startTime) {
      return false;
    }

    return true;
  }

  fetchStudents(): void {
    this.rendezVousService.getAllStudents().subscribe((data: Utilisateur[]) => {
      this.students = data;
    });
  }

  fetchEnseignants(): void {
    this.rendezVousService.getAllEnseignants().subscribe((data: Utilisateur[]) => {
      this.enseignants = data;
    });
  }

  fetchRendezVous(): void {
    this.rendezVousService.getAllRendezVous().subscribe((data: RendezVous[]) => {
      this.rendezVousList = data;
      this.dataSource.data = data;
    });
  }

  showAddDialog(): void {
    this.dialogTitle = 'Add Rendez-Vous';
    this.rendezVous = new RendezVous();
    this.selectedStudent = new Utilisateur();
    this.selectedEnseignant = new Utilisateur();
    this.rendezVousForm.reset(); // Reset the form
    this.displayDialog = true;
    this.updateRdv=false;
  }

  showEditDialog(rendezVous: RendezVous): void {
    this.dialogTitle = 'Edit Rendez-Vous';
    this.rendezVous = { ...rendezVous };
    this.selectedStudent = rendezVous.etudiant;
    this.selectedEnseignant = rendezVous.validateur;
    this.rendezVousForm.patchValue({
      id: rendezVous.id,
      startTime: rendezVous.startTime,
      endTime: rendezVous.endTime,
      statut: rendezVous.statut,
      validateur: rendezVous.validateur,
      etudiant: rendezVous.etudiant
    });
    this.displayDialog = true;
    this.updateRdv=true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  saveRendezVous(): void {
    if (this.rendezVousForm.valid) {

      this.rendezVous.startTime = this.rendezVousForm.controls['startTime'].value;
      this.rendezVous.endTime = this.rendezVousForm.controls['endTime'].value;
      let valideur : any = { id : this.rendezVousForm.controls['validateur'].value };
      this.rendezVous.validateur = valideur;
      let etudiant : any = { id : this.rendezVousForm.controls['etudiant'].value };
      this.rendezVous.etudiant = etudiant;


      if (this.rendezVous.id) {
        console.log(this.rendezVous)
        this.rendezVous.statut = this.rendezVousForm.controls['statut'].value;
        this.rendezVousService.updateRendezVous(this.rendezVous).subscribe((data:any) => {
          this.fetchRendezVous();
          this.displayDialog = false;
        });
      } else {
        console.log(this.rendezVous)
        this.rendezVousService.addRendezVous(this.rendezVous).subscribe((data:any) => {
          this.fetchRendezVous();
          this.displayDialog = false;
        });
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the required fields correctly.' });
    }
  }

  onCheckboxChange(rendezvous: any) {
    const index = this.selectedRendezvous.indexOf(rendezvous);
    if (index === -1) {
      this.selectedRendezvous.push(rendezvous);
    } else {
      this.selectedRendezvous.splice(index, 1);
    }
  }

  deleteRendezVous(id: number): void {
    this.rendezVousService.deleteRendezVous(id).subscribe(() => {
      this.fetchRendezVous();
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

import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from '../Services/matiere-service.service';
import { Matiere } from '../models/Matiere';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddMatiereDialogComponent } from '../add-matiere-dialog/add-matiere-dialog.component';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent implements OnInit {
  matieres: Matiere[] = [];
  displayDialog: boolean = false;
  selectedMatiere: Matiere | null = null;

  constructor(private matiereService: MatiereServiceService, private dialog: MatDialog, private router: Router) { }
  
  ngOnInit(): void {
    this.loadMatieres();
  }

  loadMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(data => {
      this.matieres = data;
    });
  }

  deleteMatiere(id: number): void {
    this.matiereService.deleteMatiere(id).subscribe(() => {
      this.loadMatieres();
    });
  }

  navigateToUpdateForm(id: number): void {
    this.router.navigate(['/update-matiere', id]);
  }

  openAddMatiereDialog(): void {
    const dialogRef = this.dialog.open(AddMatiereDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadMatieres();
      }
    });
  }

  showDialog(matiere: Matiere): void {
    this.selectedMatiere = matiere;
    this.displayDialog = true;
  }

  handleNavigateToUpdateForm(): void {
    if (this.selectedMatiere && this.selectedMatiere.id !== undefined) {
      this.navigateToUpdateForm(this.selectedMatiere.id);
    }
  }

  handleDeleteMatiere(): void {
    if (this.selectedMatiere && this.selectedMatiere.id !== undefined) {
      this.deleteMatiere(this.selectedMatiere.id);
    }
  }

  navigateToExams(matiereId: number): void {
    this.router.navigate(['/exams', matiereId]);
  }
}

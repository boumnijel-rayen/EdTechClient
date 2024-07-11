import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereServiceService } from '../Services/matiere-service.service';
import { Matiere } from '../models/Matiere';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddMatiereDialogComponent } from '../add-matiere-dialog/add-matiere-dialog.component';
import { alphabeticValidator } from '../alphabeticValidator';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent implements OnInit {
  matieres: Matiere[] = [];
  displayEditDialog: boolean = false;
  selectedMatiere: Matiere | null = null;
  editMatiereForm: FormGroup;

  constructor(
    private matiereService: MatiereServiceService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editMatiereForm = this.fb.group({
      nom: ['', [Validators.required, alphabeticValidator()]],
      description: ['', Validators.required],
    });
  }

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

  openEditMatiereDialog(matiere: Matiere): void {
    this.selectedMatiere = matiere;
    this.editMatiereForm.patchValue({
      nom: matiere.nom,
      description: matiere.description,
    });
    this.displayEditDialog = true;
  }

  submitEditMatiere(): void {
    if (this.editMatiereForm.valid && this.selectedMatiere) {
      const updatedMatiere = { ...this.selectedMatiere, ...this.editMatiereForm.value };
      this.matiereService.updateMatiere(this.selectedMatiere.id, updatedMatiere).subscribe(() => {
        this.loadMatieres();
        this.displayEditDialog = false;
      });
    }
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
}

import { Component,OnInit } from '@angular/core';
import { Matiere } from '../models/Matiere';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../Services/matiere-service.service';
import { ExamServiceService } from '../Services/exam-service.service';
import { Examen } from'../models/Examen'; 
@Component({
  selector: 'app-liste-matiere-etudiant',
  templateUrl: './liste-matiere-etudiant.component.html',
  styleUrl: './liste-matiere-etudiant.component.scss'
})
export class ListeMatiereEtudiantComponent implements OnInit {
  matieres: Matiere[] = [];

  constructor(
    private matiereService: MatiereServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMatieres();
  }

  loadMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(
      (data: Matiere[]) => {
        this.matieres = data;
      },
      error => {
        console.error('Erreur lors du chargement des matières :', error);
      }
    );
  }

  showMatiereExams(id: number): void {
    this.router.navigateByUrl(`/app/matieres/${id}/exams`);
  }
  
  
}

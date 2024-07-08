import { Component,OnInit } from '@angular/core';
import { Matiere } from '../models/Matiere';
import { Examen } from '../models/Examen';
import { ActivatedRoute } from '@angular/router';

import { MatiereServiceService } from '../Services/matiere-service.service';
import { ExamServiceService } from '../Services/exam-service.service';
@Component({
  selector: 'app-matiere-exams',
  templateUrl: './matiere-exams.component.html',
  styleUrl: './matiere-exams.component.scss'
})
export class MatiereExamsComponent implements OnInit {
  exams: Examen[] = [];
  idMatiere: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private examenService: ExamServiceService
  ) {}

  ngOnInit(): void {
    this.idMatiere = Number(this.route.snapshot.paramMap.get('id'));
    this.loadExams();
  }

  loadExams(): void {
    if (this.idMatiere) {
      this.examenService.getExamsByMatiere(this.idMatiere).subscribe(
        (data: Examen[]) => {
          this.exams = data;
        },
        error => {
          console.error('Erreur lors du chargement des examens :', error);
        }
      );
    }
  }
}

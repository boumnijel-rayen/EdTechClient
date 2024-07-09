import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Examen } from '../models/Examen';
import { ExamServiceService } from '../Services/exam-service.service';

@Component({
  selector: 'app-matiere-exams',
  templateUrl: './matiere-exams.component.html',
  styleUrls: ['./matiere-exams.component.scss']
})
export class MatiereExamsComponent implements OnInit {
  exams: Examen[] = [];
  selectedExam: Examen | null = null;
  display: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private examenService: ExamServiceService
  ) {}

  ngOnInit(): void {
    const idMatiere = Number(this.route.snapshot.paramMap.get('id'));
    if (idMatiere) {
      this.loadExams(idMatiere);
    }
  }

  loadExams(idMatiere: number): void {
    this.examenService.getExamsByMatiere(idMatiere).subscribe(
      (data: Examen[]) => {
        console.log(data)
        this.exams = data.map(exam => {
          exam.deadline = new Date(exam.deadline); // Conversion en instance de Date
          return exam;
        });
      },
      error => {
        console.error('Erreur lors du chargement des examens :', error);
      }
    );
  } 
  
  openPopup(exam: Examen): void {
    this.selectedExam = exam;
    this.display = true;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
   // if (file) {
      // Handle file upload logic here
   //}
  }

  submitWork(): void {
    // Handle work submission logic here
    this.display = false;
  }
}
